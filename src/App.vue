<template>
  <Navbar/>
  <router-view/>
</template>

<style>
  @import './style.css';
</style>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components:{Navbar}
}
</script>