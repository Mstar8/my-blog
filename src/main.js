import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**elementui-plus */
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

/**ali图标库 */
import "@/assets/icon/iconfont.css";

/**样式 */
import './assets/style/common.css'

/**平滑移动插件https://github.com/iamdustan/smoothscroll */
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

/**动画特效Animate.css https://animate.style/#attention_seekers*/
import 'animate.css';

const app = createApp(App)
.use(store)
.use(router)
.use(ElementPlus)
app.mount('#app')