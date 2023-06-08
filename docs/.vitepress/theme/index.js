// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './tailwind.postcss'
import './style.css'

export default {
	Layout,
	enhanceApp({ app, router, siteData }) {
		// ...
	}
}
