const fs = require('fs');
const path = require('path');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const readfile = util.promisify((a, b) => fs.readFile(a,  'utf8', b));

module.exports = function (context, options) {
  return {
    name: 'gather-files',

    // Load content hook
    async loadContent() {
      const docsDir = path.join(context.siteDir, 'docs');
      const avatarDir = path.join(docsDir, 'Avatars');
      const otherDir = path.join(docsDir, 'Other');
      const unityDir = path.join(docsDir, 'Unity-Animations');
      try {
        async function loadDir(dirName){
          let files = (await readdir(dirName)).map(x => path.join(dirName, x))
          files = files.filter(x => x.endsWith(".md"))
          let fileContent = await Promise.all(
              files.map(filePath => readfile(filePath))
          )
          return fileContent.sort((file1, file2) => {
           return parseInt(file1.split("\r\n")[2].replace("sidebar_position: ", "")) - parseInt(file2.split("\r\n")[2].replace("sidebar_position: ", ""))
          }).map(file => {
            return {
              title: file.split("\r\n")[1].replace("title: ", ""),
              slug: file.split("\r\n")[3].replace("slug: ", "")
            }
          })
        }
        return [await loadDir(unityDir), await loadDir(avatarDir), await loadDir(otherDir)];
      } catch (err) {
        console.error(`Error loading content from '${docsDir}':`, err);
        throw err;
      }
    },

    // Content loaded hook
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;

      // Set global data that can be loaded by any theme component
      setGlobalData(content);
    }
  };
};