import subprocess
from datetime import datetime

import requests
import os
import shutil
import re

token="secret_4pX9nCwWBbrBARrMTXJJGRMHVxVh4izsJqNlnuvN9uv"
pageId="edbb0cd9d1c64a619d0be4bcffb58422"

def transform_markdown(text, folderName):
    new_text = re.sub(r'\!\[([^\]]+)\]\(([^\)]+)\)', r'![\1](\2)<br/><GreyItalicText>\1</GreyItalicText>', text) #Image text
    new_text = new_text.replace("<ReactPlayer", "<ReactPlayer width='100%' height='auto' ")
    new_text = re.sub(r"((?:-|[0-9].) .*)\n\n", r"\1\n", new_text)

    contributors = new_text.splitlines()[5].replace("contributors: ", "").replace("\"", "")
    new_text = new_text.replace("\n---\n", f"\n---\nContributors: {contributors}\n")

    dateString = datetime.strptime(new_text.splitlines()[4].replace("last_edited: ", ""), '%Y-%m-%dT%H:%M:%S.%fZ').strftime("%d %B %Y %H:%M:%S")
    new_text = new_text + f"<RightAlignedText>Last Updated: { dateString }</RightAlignedText>"
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

