import subprocess
import requests
import os
import shutil
import re

token="secret_4pX9nCwWBbrBARrMTXJJGRMHVxVh4izsJqNlnuvN9uv"
pageId="edbb0cd9d1c64a619d0be4bcffb58422"

def transform_markdown(text, folderName):
    new_text = re.sub(r'\!\[([^\]]+)\]\(([^\)]+)\)', r'![\1](\2)\n\1', text) #Image text
    new_text = new_text.replace("""<details>
<summary>Table of Contents</summary>

> 


</details>""", "")
    new_text = new_text.replace("""

</div><div className='notion-spacer'></div>
</div>


---


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


""", "")
    new_text = re.sub(r"""Minute Read


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc\(\(100% - \(min\(32px, 4vw\) \* 1\)\) \* 0\.5\)'}}>\n*
</div><div className='notion-spacer'></div>""", r"""Minute Read


<div class='notion-row'>
""", new_text)
    new_text = new_text.replace("<ReactPlayer", "<ReactPlayer width='100%' height='auto' ")
    title = new_text.split("\n")[1].replace("title: ", "")
    new_text = re.sub("slug: .*", f"slug: /{folderName}/{title}", new_text)
    return new_text

def process_dir(dir_path):
    for root, dirs, files in os.walk(dir_path):
        for name in files:
            if name.endswith(".md"):
                file_path = os.path.join(root, name)
                with open(file_path, 'r', encoding='utf-8') as f:
                    contents = f.read()
                new_contents =  transform_markdown(contents, os.path.basename(root))
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_contents)

if __name__ == '__main__':
    if os.path.exists("./docs"):
        shutil.rmtree("./docs")
    subprocess.run(["npx.cmd", "@sillsdev/docu-notion", "-n", token, "-r", pageId])
    process_dir("docs")
    subprocess.run(["npm.cmd", "install"])
    subprocess.run(["npm.cmd", "start"])

