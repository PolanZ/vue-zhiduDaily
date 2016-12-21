import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import Contents from '../components/Contents'
import Sidebar from '../components/Sidebar'
import Theme from '../components/Theme'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	components: {
		default: Home,
		sidebar: Sidebar
	}
},{
	path: '/home',
	components: {
		default: Home,
		sidebar: Sidebar
	}
},{
	path: '/contents',
	component: Contents
},{
	path: '/theme',
	components: {
		default: Theme,
		sidebar: Sidebar
	}
}]

const router = new VueRouter({
	routes
})

export default router