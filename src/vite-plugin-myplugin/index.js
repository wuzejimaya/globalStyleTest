import path from 'path'
import fs from 'fs'

//获取所有文件名
function readdirSync(dir, files = []) {
  fs.readdirSync(dir).forEach(item => {
    const basePath = path.resolve(dir, item)
    if (fs.statSync(basePath).isDirectory()){
      readdirSync(basePath, files)
    } else {
      files.push(item)
  }
  })
  return files
}

export default () => {
  return {
    name: 'vite:assets',
    transformIndexHtml() {
      let result = []
      const assetsPath = path.resolve(__dirname, '../assets')
      const fileList = readdirSync(assetsPath)
      
      fileList.forEach(function (file) {
        if (file.startsWith("global-") && file.endsWith(".css")) {
          result.push({
            tag: "link",
            attrs: {
              "rel": "stylesheet",
              "href": './src/assets/' + file,
            },
            injectTo: "head"
          })
        }
      })
      
      return result
    }
  }
}