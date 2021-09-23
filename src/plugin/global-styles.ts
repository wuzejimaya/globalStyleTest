import { Plugin } from 'vite'
export default (options): Plugin => {
  return {
    name: "global-styles",
    enforce: 'pre',
    async transform(code: string, id: string) {
      if (!/\.scss/g.test(id)) {
        return null
      }

      let test = `@import "globalb.scss";\n${code}`
      console.log(test)
      return {
        code: `@import "globalb.scss";\n@import "globalc.scss";\n${code}`
      }
    }
  }
}