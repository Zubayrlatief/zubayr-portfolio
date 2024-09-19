<template>
 <div id="app">
    <NavBar/> 
    <LandingPage/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
    LandingPage
  }
}
</script>

<style>

</style>
