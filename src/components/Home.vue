<template>
	<div class="home">
		<pl-header :title="headerTitle" :goback="goback" v-on:sideOpen="openSide"></pl-header>
		<div class="listContent">
			<span>今日文章</span>
			<ul>
				<li v-for="store in stories">
					<router-link :to="{path:'/contents', query: {id: store.id}}">
						<p>{{ store.title }}</p>
						
						<img class="listImg" :src="tin+'/pic?img='+store.images[0]" >
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>
	.listContent {
		margin-top: 3.6rem;
		padding: 12px;
		font-size: 100%;
	}
	.listContent > span {
		font-size: 50%;
		color: #999;
	}
	.listContent ul {
		list-style: none;
		padding: 0;
	}
	.listContent ul li {
		margin-top: 10px;
	}
	.listContent ul li a {
		display: flex;
		justify-content: space-between;
		color: #333;
		padding: 12px;
		background-color: #fff;
		border: 1px solid #e9e9e9;
		border-radius: 4px;
	}
	.listContent ul li a.router-link-active {
		color: #999;
	}
	.listContent ul li a:active, .listContent ul li a:focus {
		background-color: #eee;
	}
	.listContent .listImg {
		display: block;
		margin-left: 1rem;
		width: 64px;
		height: 64px;
	}
</style>

<script>
	import Header from './Header.vue'
	import store from '../store/index.js'

	export default {
		name: 'home',
		data () {
			return {
				headerTitle: '首页',
        goback: false,
				stories: [],
				tin: Tin
			}
		},
		components: {
			'pl-header': Header
		},
		created () {
			// const json = this.$getNews(this, 'http://news-at.zhihu.com/api/4/news/latest')

			this.$http.get(Tin+'/latest',{},{
				emulateJSON: true
			}).then((response) => {
				var data = response.data
				// console.log(data)
				this.stories = data.stories
			}, (response) => {
				console.warn('error'+response)
			})

		},
		methods: {
			openSide () {
				// console.log('Home is chilck openSide')
				this.$emit('sideIsOpen')
			}
		}
	}
</script>