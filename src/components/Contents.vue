<template>
	<transition name="slide">
	<div id="content">
		<pl-header :title="headerTitle" :goback="goback"></pl-header>
		<transition name="slide-down">
				<div v-if="loading" class="loading">正在加载中...</div>
			</transition>
		<div class="new-image" :style="styleImage"></div>
		<div id="body" v-html="body"></div>
	</div>
	</transition>
</template>

<script>
	import Header from './Header.vue'

	export default {
		name: 'contents',
		data () {
			return {
				headerTitle: '文章',
        goback: true,
				tin: Tin,
				loading: false,
				body: '',
				image: '',
				styleImage: ''
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
				this.loading = true
				var query = this.$route.query;
				this.$http.get(Tin+'/news',{
					params:{
						id: query.id
					},
				},{
					emulateJSON: true
				}).then((response) => {
					this.loading = false
					var data = response.data
					this.headerTitle = data.title
					this.body = data.body.replace(/src="http/g,'src="'+Tin+'/pic?img=http');
					this.image = data.image;
					if (this.image === undefined) {
						this.styleImage = {
							backgroundColor: '#f2f2f2'
						}
					}else {
						this.styleImage = {
							backgroundImage: 'url('+Tin+'/pic?img='+this.image
						}
					}
				}, (response) => {
					this.loading = false
					console.warn('error'+response)
				})
			}
		}
	}
</script>

<style>
	@import url("http://news-at.zhihu.com/css/news_qa.auto.css");
	#content {
		margin-top: 3.6rem;
		background-color: #fff;
	}
	.new-image {
		display: block;
		width: 100%;
		height: 300px;
		overflow: hidden;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.new-image img {
		width: 100%;
	}
	.new-title {
		padding: 1rem;
		color: #000;
		font-weight: bold;
		border-bottom: 6px solid #f6f6f6;
	}
	.headline {
		display: none;
	}
</style>