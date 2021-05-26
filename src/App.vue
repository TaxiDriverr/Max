<template>
  <div id="app">
<!--    <Login/>-->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/Login'
export default {
  name: 'App',
  components:{
    Login
  },
  methods:{
  }
}
</script>

<style>

</style>
