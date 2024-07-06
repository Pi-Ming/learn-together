import AUI from 'ant-design-vue'
import formCreate from '@form-create/ant-design-vue'
import router from '@/router'
import pinia from './pinia'

// 插件列表
export default [
  AUI,
  formCreate, // 使用FormCreate时需全量引入AUI
  pinia,
  router
]
