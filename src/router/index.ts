import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const container = () => import('@/pages/container/container.vue');
const index = () => import('@/pages/index/index.vue');
const login = () => import('@/pages/login/login.vue');
const form = () => import('@/pages/form/form.vue');
const input = () => import('@/pages/form/input/input.vue');
const select = () => import('@/pages/form/select/select.vue');
const table = () => import('@/pages/table/table.vue');

export const childRoutes = [
	{
		path: "/index",
		name: "首页",
		component: index,
		meta: {
			isShow: true
		}
	},
	{
		path: "/form",
		name: "表单",
		component: form,
		meta: {
			isShow: true
		},
		children: [
			{
				path: "input",
				name: "input输入框",
				component: input,
				meta: {
					isShow: true
				}
			},
			{
				path: "select",
				name: "select选择器",
				component: select,
				meta: {
					isShow: true
				}
			}
		]
	},
	{
		path: "/table",
		name: "表格",
		component: table
	}
]

const routes: Array<RouteRecordRaw> = [
	{ path: '', redirect: '/login' },
	{
		path: '/',
		component: container,
		children: childRoutes
	},
	{
		path: '/login',
		name: '登录',
		component: login
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router