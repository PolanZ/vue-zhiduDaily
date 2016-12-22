<template>
	<div class="theme">
		<pl-header :title="headerTitle" v-on:sideOpen="openSide"></pl-header>
		<transition name="slide-down">
			<div v-if="loading" class="loading">加载中...</div>
		</transition>
		<div class="listContent">	
			<div v-if="error" class="error">{{error}}</div>
			<ul>
				<li v-for="store in stories">
					<router-link :to="{path:'/contents', query: {id: store.id}}">
						<p>{{ store.title }}</p>
						<img class="listImg" v-if="store.images" :src="tin+'/pic?img='+store.images[0]" >
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	.theme {
		padding-top: 3.6rem;
	}
</style>

<script>
	import plHeader from './Header.vue'

	export default {
		name: 'theme',
		data () {
			return {
				headerTitle: '主题',
				stories: [],
				tin: Tin,
				loading: false,
				error: null
			}
		},
		components: {
			plHeader
		},
		watch: {
			'$route': 'fetchData'
		},
		created () {
			this.fetchData()
		},
		methods: {
			fetchData () {
				var query = this.$route.query
				this.error = null
				this.loading = true
				if (query.id) {
					this.$http.get(Tin+'/theme', {
						params:{
							id: query.id
						}
					},{
						emulateJSON: true
					}).then((response) => {
						this.loading = false
						var data = response.data
						this.headerTitle = data.name
						this.stories = data.stories
					}, (err) => {
						this.loading = false
						this.error = err.message
					})
				}else {
					this.loading = false
					this.error = "数据加载有错，请检查ID"
				}
			},
			openSide () {
				this.$emit('sideIsOpen')
			}
		}
	}
</script>