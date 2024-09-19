<template>
 <div id="app">
    <NavBar/> 
    <LandingPage/>
    <AboutPage/>
    <SkillsPage/>
    
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import NavBar from './components/NavBar.vue'
import AboutPage from './components/AboutPage.vue'
import SkillsPage from './components/SkillsPage.vue';

export default {
  components: {
    NavBar,
    LandingPage,
    AboutPage,
    SkillsPage,

  }
}
</script>

<style>

</style>
