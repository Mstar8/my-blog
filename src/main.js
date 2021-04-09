import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**elementui-plus */
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

/**ali图标库 */
import "@/assets/font/iconfont.css";

/**样式 */
import './assets/style/common.css'

const app = createApp(App).use(store).use(router).use(ElementPlus)
app.mount('#app')