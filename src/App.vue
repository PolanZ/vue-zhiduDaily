<template>
  <div id="app">
    <div class="contentContainer" v-on:scroll="scroll">
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
</style>
