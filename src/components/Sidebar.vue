<template>
	<div class="sidebar" :class="[isActive ? 'active-in-view' : 'active-out-view']">
		<div class="bg" @click="close"></div>
		<div class="sidebarContainer">
			<div class="header">
				<div class="userHead"></div>
				<div class="userName">Polan</div>
			</div>
			<div class="list">
				<router-link class="active" to="/home" :replace="true">
					<span @click="close">首页</span>
				</router-link>
				<router-link v-for="item in list" :to="'/theme?id='+item.id" :replace="true">
					<span @click="close">{{ item.name }}</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.sidebar {
		position: fixed;
		left: -100%;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		overflow: hidden;
	}
	.sidebar .bg {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0, .25);
		z-index: 1;
		opacity: 0;
		/*-webkit-transition: opacity .25s ease-in-out ;*/
	}
	.sidebarContainer {
		position: absolute;
		left: 0;
		top: 0;
		width: 60%;
		height: 100%;
		background-color: #fff;
		overflow: auto;
		z-index: 2;
		transition: left .25s ease-in-out;
		-webkit-transition: left .25s ease-in-out;
	}
	.sidebar.active-in-view {
		display: block;
	}
	.sidebar.active-in-view .bg {
		-webkit-animation: fadeIn .25s ease-in-out .25s forwards;
		animation: fadeIn .25s ease-in-out .25s forwards;
	}
	.sidebar.active-in-view {
		-webkit-animation: sideIn .25s ease-in-out forwards;
		animation: sideIn .25s ease-in-out forwards;
	}

	.sidebar.active-out-view {
		display: none;
	}
	.sidebar.active-out-view .bg {
		-webkit-animation: fadeOut .25s ease-in-out forwards;
		animation: fadeOut .25s ease-in-out forwards;
	}
	.sidebar.active-out-view {
		-webkit-animation: sideOut .25s ease-in-out forwards;
		animation: sideOut .25s ease-in-out forwards;
	}

	.sidebarContainer .header {
		display: flex;
		justify-content: start;
		align-items: center;
		width: 100%;
		height: 6rem;
		background-color: #0e90ff;
	}
	.userHead {
		margin: 0 1rem;
		width: 48px;
		height: 48px;
		background-color: #fff;
		border: 2 solid #fff;
		border-radius: 50%;
	}
	.userName {
		font-weight: 600;
		color: #fff;
	}

	.sidebarContainer .list {
		/*list-style: none;*/
		margin: 10px 0;
		padding-left: 0 !important;
	}
	.sidebarContainer .list a {
		display: block;
		color: #333;
	}
	.sidebarContainer .list a > span {
		display: block;
		padding: .6rem 1.2rem;
	}
	.sidebarContainer .list a:active {
		background-color: #eee;
	}
	.sidebarContainer .list a.active {
		background-color: #e9e9e9;
	}

	@keyframes fadeIn {
		0% {opacity: 0;}
		100% {opacity: 1;}
	}
	@keyframes sideIn {
		0% {left: -100%}
		100% {left: 0}
	}
	@keyframes fadeOut {
		0% {opacity: 1;}
		100% {opacity: 0;}
	}
	@keyframes sideOut {
		0% {left: 0}
		100% {left: -100%}
	}
</style>

<script>
export default {
	name: 'sidebar',
	data () {
		return {
			// isActive: ''
			list: ''
		}
	},
	props: ['isActive'],
	created () {
		this.$http.get(Tin+'/themes', {}, {
			emulateJSON: true
		}).then((response) => {
			var data = response.data
			this.list = data.others
		})
	},
	methods: {
		close () {
			this.$emit('closeSide')
			// this.isActive = false
		}
	}
}
</script>