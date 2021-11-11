<template>
  <div id="app" :class="changeColor ? 'app Active' : 'app'">
    <px-header/>
    <router-view/>
  </div>
</template>

<script>
import PxHeader from '@/components/Layout/PxHeader'

export default {
  name: 'App',
  components: {
    PxHeader
  },
  data() {
    return{
      changeColor: false
    }
  },
  created() {
    this.$bus.$on('change-background', (data)=> {
        this.changeColor = data
        })
  }
}
</script>

<style>
body, html{
  margin: 0px;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F3F6F8;
  min-height: 100vh;
  transition: all .5s ease;
}
.Active{
  background: #121721;
}
a, button{
  text-decoration: none;
  cursor: pointer;
}
</style>
