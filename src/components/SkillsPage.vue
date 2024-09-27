<template>
  <div id="skills" class="heading">
    <h2 class="section-title text-center">My Skills</h2>
    <div class="skills-section">
      <div class="wrapper">
        <div class="box-area">
          <!-- Loop through the skillsData to display each skill -->
          <div class="box" v-for="skill in skillsData" :key="skill.name">
            <img
              :src="skill.github"
              :alt="skill.name"
              class="sr"
              style="width: 100%; height: auto; border-radius: 10px;"
            />
            <div class="overlay">
              <h3>{{ skill.name }}</h3>
              <h5>{{ skill.competency }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Soft Skills Section -->
    <div id="soft-skills" class="heading">
      <h2 class="section-title text-center">My Soft Skills</h2>
      <div class="wrapper">
        <div class="box-area soft-skills-area"> <!-- Using the same box-area class -->
          <!-- Loop through the softSkillsData to display each soft skill -->
          <div class="box" v-for="softSkill in softSkillsData" :key="softSkill.title">
            <img
              :src="softSkill.url"
              :alt="softSkill.title"
              class="sr"
              style="width: 100%; height: auto; border-radius: 10px;"
            />
            <div class="overlay">
              <h3>{{ softSkill.title }}</h3>
              <h5>{{ softSkill.description }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsData: [], // This will hold the skills from your JSON file
      softSkillsData: [], // This will hold the soft skills from your JSON file
    };
  },
  mounted() {
    fetch("https://zubayrlatief.github.io/working-api-portfolio/data/index.json?" + new Date().getTime())
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.skills); // Check fetched data here
        this.skillsData = data.skills.map(skill => ({
          ...skill,
          competency: skill.competency || 50 // Default to 50 if not provided
        }));
        this.softSkillsData = data.softSkills; // Set the soft skills data
      })
      .catch((error) => console.error("Error fetching skills data:", error));
  },
};
</script>

<style scoped>
.heading {
  background-color: rgb(0, 0, 0);
}

.skills-section,
.soft-skills-section {
  background-color: #000000;
  padding: 10px 0;
  width: 100%;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(70, 68, 68);
  padding-top: 2rem;
  text-align: center;
  font-family: poppins;
}

.wrapper {
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Center horizontally */
  padding: 40px 10%;
}

.box-area {
  display: grid; /* Change to grid for soft skills */
  grid-template-columns: repeat(3, 1fr); /* Create 3 equal columns */
  grid-gap: 40px; /* Spacing between boxes */
  margin-top: 50px;
}

.box {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  transition: transform 0.3s ease;
  padding: 4rem;
}

.overlay {
  width: 100%;
  height: 0;
  background: linear-gradient(transparent, #1c1c1c 58%);
  border-radius: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  font-size: 14px;
  transition: height 0.5s;
}

.overlay h3 {
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 80%;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 30px;
  letter-spacing: 2px;
  color: aliceblue;
}

.overlay h5,
p {
  color: rgb(133, 139, 145);
}

.box:hover img {
  transform: scale(1.1);
}

.box:hover .overlay {
  height: 100%;
}
</style>
