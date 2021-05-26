import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === 'production' ? '/vite2-vue3-TypeScript4/' : '/',
	plugins: [vue()],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	}
})
