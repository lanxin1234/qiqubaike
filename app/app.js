import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import jingxuan from './views/jingxuan/index.vue'
import shipin from './views/shipin/index.vue'
import duanzi from './views/duanzi/index.vue'
import faxian from './views/faxian/index.vue'
// vue 发送请求的插件
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
// 懒加载
// 网址 https://www.npmjs.com/package/vue-lazyload
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
	loading: '../assets/5-121204193R7-51.gif',//这个是加载的loading过渡效果
});
// 消除移动端点击300毫秒延迟插件
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

Vue.use(VueRouter);
const routes = [
    { path: '/jingxuan', component: jingxuan ,name:"精选"},
    { path: '/shipin', component: shipin ,name:"视频"},
    { path: '/duanzi', component: duanzi ,name:"段子"},
    { path: '/faxian', component: faxian ,name:"发现"},
    { path: '*', redirect: '/jingxuan' }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})
new Vue({
    el: '#app',
    router,
    render: h => h(app)
})
window.router = router