<template>
	<div class="theme">
		<pl-header :title="headerTitle" v-on:sideOpen="openSide"></pl-header>
		<div class="listContent">
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

<style>
	
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
				route: this.$route
			}
		},
		components: {
			plHeader
		},
		route: {
			data () {
				console.log('dddd')
			}
		},
		wacth: {
			route: {
				handler: function (val, oldVal) {
					var query = val.query
					this.$http.get(Tin+'/theme', {
						params:{
							id: query.id
						}
					},{
						emulateJSON: true
					}).then((response) => {
						var data = response.data
						this.headerTitle = data.name
						this.stories = data.stories
					})
				},
      	deep: true
			}
		},
		created () {
			var query = this.$route.query
			this.$http.get(Tin+'/theme', {
				params:{
					id: query.id
				}
			},{
				emulateJSON: true
			}).then((response) => {
				var data = response.data
				this.headerTitle = data.name
				this.stories = data.stories
			})
		},
		methods: {
			openSide () {
				this.$emit('sideIsOpen')
			}
		}
	}
</script>