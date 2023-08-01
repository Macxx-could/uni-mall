import App from './App'

// #ifndef VUE3
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(ViewUIPlus)

const app = new Vue({
	...App
})

app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
export function createApp() {
	const app = createSSRApp(App)
	app.use(ViewUIPlus)
	return {
		app
	}
}
// #endif