import { createApp } from 'vue'
import 'normalize.css'

import App from './App.vue'
import { registerCmps } from '@/components/index'
import { registerPlugins } from '@/plugins/index'

import '@/style/common.less'

const app = createApp(App)

// 注册全局组件
registerCmps(app)
// 注册插件
registerPlugins(app)

app.mount('#app')
