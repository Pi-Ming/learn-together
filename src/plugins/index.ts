import { App } from 'vue'
import plugins from './plugins'

export const registerPlugins = (app: App<Element>) => {
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
