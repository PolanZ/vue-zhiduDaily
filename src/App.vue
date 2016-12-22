<template>
  <div id="app" v-on:scroll="scroll">
    <div class="contentContainer">
      <router-view v-on:sideIsOpen="sideIsOpen"></router-view>
    </div>

    <router-view name="sidebar" :is-active="isOpen" v-on:closeSide="sideIsOpen"></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
    data () {
      return {
        isOpen: false
      }
    },
    components: {
      
    },
    methods: {
      scroll (event) {
        var _this = event.target;
        var scrollTop = _this.scrollTop;
        console.log(scrollTop)
      },
      sideIsOpen () {
        // console.log('app isOpen is click')
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    display: flex;
    width: 100%;
    min-height: 100%;
    font-family: 'Microsoft Yahei', Arial, Helvetica, 'sans-serif';
  }
  ul,ol {
    -webkit-padding-start: 0px;
  }
  #app {
    width: 100%;
    max-width: 800px;
    height: 100%;
    margin: auto;
    background-color: #f9f9f9;
  }
  /* list */
  .listContent {
    position: relative;
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
  /* list end */
  .loading {
    position: relative;
    font-size: 62.5%;
    padding: .8rem;
    color: #999;
    text-align: center;
    background-color: #fff;
  }
  .error {
    text-align: center;
    font-size: 62.5%;
    color: red;
  }
  /* transition */
  .slide-down-enter, .slide-down-leave {
    top: -100%;
    /*opacity: 0;*/
  }
  .slide-down-enter-active, .slide-down-leave-active {
    transition: top .5s ease-in-out;
  }
</style>
