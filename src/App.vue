<template>
 <div id="app">
    <NavBar/> 
    <LandingPage/>
    <AboutPage/>
    <SkillsPage/>
    <ExperiencePage/>
    <FooterPage/>
    
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import NavBar from './components/NavBar.vue'
import AboutPage from './components/AboutPage.vue'
import SkillsPage from './components/SkillsPage.vue'
import ExperiencePage from './components/ExperiencePage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  components: {
    NavBar,
    LandingPage,
    AboutPage,
    SkillsPage,
    ExperiencePage,
    FooterPage

  }
}
</script>

<style>
#app{
  background-color: black;
}
</style>
