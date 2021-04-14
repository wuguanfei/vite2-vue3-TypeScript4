import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import store from '@/store';
import router from '@/router';
import { ElMessageBox, ElMessage } from 'element-plus';
import { requestUrl, devUrl } from './configUrl';

const service = axios.create({
	baseURL: process.env.NODE_ENV === 'development' ? devUrl : requestUrl,
	timeout: 5000
})

service.interceptors.request.use(
	// 发送请求之前拦截
	(config: AxiosRequestConfig) => {
		if (store.getters.token) {
			// config.headers['x-auth-token'] = store.getters.token
		}
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
)

service.interceptors.response.use(
	(response: AxiosResponse) => {
		// 返回code值为200请求成功
		if (response.status === 200) {
			return Promise.resolve(response.data);
		} else {
			ElMessage.error(response.data.message);
			return Promise.reject(response.data);
		}
	},
	(error: AxiosError) => {
		// 回话过期
		if ((error.response as any).status == 403) {
			ElMessage.error('会话已过期')
			router.replace("/login");
		} else {
			// 其他错误
			ElMessage.error((error.response as any).data.message);
		}
		return Promise.reject(error);
	}
)

export default service;
