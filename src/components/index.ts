import { App } from 'vue'

import GlobalHeader from './global-header/index.vue'
import GlobalFooter from './global-footer/index.vue'

const components = [
  { component: GlobalHeader, name: 'GlobalHeader' },
  { component: GlobalFooter, name: 'GlobalFooter' }
]

export const registerCmps = (app: App<Element>) => {
  // 公共组件在这里注册
  // 业务系统可能用不上所有组件，建议不要全部注册，通过局部引入，或者把需要注册的文件脱离git管理
  components.forEach((cmp) => app.component(cmp.name, cmp))
}
