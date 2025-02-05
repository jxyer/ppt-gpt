import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'
import axios from 'axios'

import '@icon-park/vue-next/styles/index.css'
import 'prosemirror-view/style/prosemirror.css'
import 'animate.css'

import '@/assets/styles/prosemirror.scss'
import '@/assets/styles/global.scss'
import '@/assets/styles/antd.scss'
import '@/assets/styles/font.scss'

import Icon from '@/plugins/icon'
import Directive from '@/plugins/directive'


const app = createApp(App)

app.provide('$axios', axios)
app.use(Icon)
app.use(Directive)

app.use(createPinia())
app.use(Antd)
app.mount('#app')
