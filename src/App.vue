<template>
 <div id="app">
    <LandingComp/>
    <NavBar/> 
    <ProjectPage/>
    <AboutPage/>
    <SkillsPage/>
    <ExperiencePage/>
    <EducationPage/>
    <FooterPage/>
    
  </div>
</template>

<script>
import LandingComp from './components/LandingComp.vue'
import ProjectPage from './components/ProjectPage.vue'
import NavBar from './components/NavBar.vue'
import AboutPage from './components/AboutPage.vue'
import SkillsPage from './components/SkillsPage.vue'
import ExperiencePage from './components/ExperiencePage.vue';
import FooterPage from './components/FooterPage.vue';
import EducationPage from './components/EducationPage.vue';

export default {
  components: {
    LandingComp,
    NavBar,
    ProjectPage,
    AboutPage,
    SkillsPage,
    ExperiencePage,
    EducationPage,
    FooterPage

  }
}
</script>

<style>
#app{
  background-color: black;
}
</style>
