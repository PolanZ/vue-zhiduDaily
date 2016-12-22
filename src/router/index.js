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

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior
})

export default router