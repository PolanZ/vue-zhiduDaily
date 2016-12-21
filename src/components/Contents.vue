<template>
	<div id="content">
		<pl-header :title="headerTitle" :goback="goback"></pl-header>
		<div class="new-image" :style="styleImage"></div>
		<!-- <div class="new-title">{{ title }}</div> -->
		<div id="body" v-html="body"></div>
	</div>
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
				body: '正在加载...',
				title: '',
				image: '',
				styleImage: ''
			}
		},
		components: {
			'pl-header': Header
		},
		created () {
			var query = this.$route.query;
			this.$http.get(Tin+'/news',{
				params:{
					id: query.id
				},
			},{
				emulateJSON: true
			}).then((response) => {
				var data = response.data
				this.title = data.title;
				this.headerTitle = this.title
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
				console.warn('error'+response)
			})
		}
	}
</script>

<style >
	@import url("http://news-at.zhihu.com/css/news_qa.auto.css");
	#content {
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