<template>
	<div id="header" class="header" @click="headerClick">
		<a class="goBack" v-if="goback" @click="back">&lt;返回</a>
		<a class="menuIcon" v-else @click="sideOpen"></a>
		<div class="headerText">{{ title }}</div>
	</div>
</template>

<style scoped>
	.header {
		position: fixed;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		width: 100%;
		height: 3.6rem;
		padding: 0 .8rem;
		/*line-height: 68px;*/
		background-color: #0e90ff;
		color: #fff;
	}
	.header .menuIcon {
		position: relative;
    width: 18px;
    height: 12px;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    margin-right: 15px;
    -webkit-transition: -webkit-transform 1s;
    transition: -webkit-transform 1s;
    transition: transform 1s;
    transition: transform 1s,-webkit-transform 1s;
	}
	.header .menuIcon:before {
		content: "";
    display: block;
    width: 18px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    top: 5px;
	}
	.header .goBack {
		margin-right: 15px;
	}
	.header .headerText {
		max-width: 60%;
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>

<script>
	export default {
		name: 'header',
		data () {
			return {
			}
		},
		props: ['title', 'goback'],
		methods: {
			headerClick () {
				window.scrollTo(0, 0)
			},
			sideOpen () {
				this.$emit('sideOpen')
			},
			back () {
				this.$router.go(-1)
			}
		}
	}
</script>