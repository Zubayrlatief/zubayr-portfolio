<template>
  <div class="heading">
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
              <h5>Competency: {{ skill.competency }}%</h5>
              <div class="progress">
                <div
                  class="progress-bar"
                  :style="{ width: skill.competency + '%' }"
                ></div>
              </div>
              <p>{{ skill.competency }}%</p>
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
    };
  },
  mounted() {
    fetch("https://zubayrlatief.github.io/Api-portfolio/data/index.json?" + new Date().getTime())
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
      })
      .catch((error) => console.error("Error fetching skills data:", error));
  },
};
</script>

<style scoped>
.heading {
  background-color: rgb(0, 0, 0);
}

.skills-section {
  background-color: #000000;
  padding: 50px 0;
  width: 100%;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(70, 68, 68);
  margin-bottom: 50px;
  text-align: center;
  font-family: poppins;
}

.wrapper {
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Center horizontally */
  padding: 40px 10%;
}

.box-area {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-top: 50px;
}

.box {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  transition: transform 0.3s ease;
  padding: 5rem;
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

/* Progress bar styles */
.progress {
  background-color: #d8d8d8;
  border-radius: 10px;
  height: 10px;
  width: 100%; /* Fixed width for all progress bars */
  margin-top: 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: black; /* Fill color */
  transition: width 0.3s ease;
}
</style>
