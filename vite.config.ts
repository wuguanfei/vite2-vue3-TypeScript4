import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	alias: {
		'@': resolve(__dirname, 'src')
	}
})
