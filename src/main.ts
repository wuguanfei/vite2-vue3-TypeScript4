import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/common.scss'

router.beforeEach((to, from, next) => {
	if (to.path === '/login') {
		next();
	} else {
		if (store.getters.token) {
			next();
		} else {
			next('/login')
		}
	}
})

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
