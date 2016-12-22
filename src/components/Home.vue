<template>
	<div class="home">
		<pl-header :title="headerTitle" :goback="goback" v-on:sideOpen="openSide"></pl-header>
		<transition name="slide-down">
			<div v-if="loading" class="loading">加载中...</div>
		</transition>
		<div class="listContent">
			<span>今日文章</span>
			<ul>
				<li v-for="store in stories">
					<router-link :to="{path:'/contents', query: {id: store.id}}" active-class>
						<p>{{ store.title }}</p>
						<img class="listImg" :src="tin+'/pic?img='+store.images[0]" >
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	.home {
		margin-top: 3.6rem;
	}
	
</style>

<script>
	import Header from './Header.vue'
	import store from '../store/index.js'

	export default {
		name: 'home',
		data () {
			return {
				loading: false,
				headerTitle: '首页',
        goback: false,
				stories: [],
				storiesNew: null,			// 用来判断是否有更新最新数据
				tin: Tin
			}
		},
		components: {
			'pl-header': Header
		},
		created () {
			this.fetchData()
		},
		methods: {
			fetchData () {
				// const json = this.$getNews(this, 'http://news-at.zhihu.com/api/4/news/latest')
				this.loading = true
				this.$http.get(Tin+'/latest',{},{
					emulateJSON: true
				}).then((response) => {
					this.loading = false
					var data = response.data
					// console.log(data)
					this.stories = data.stories
				}, (response) => {
					this.loading = false
					console.warn('error'+response)
				})
			},
			openSide () {
				// console.log('Home is chilck openSide')
				this.$emit('sideIsOpen')
			}
		}
	}
</script>