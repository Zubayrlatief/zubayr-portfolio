<template>
  <div id="skills" class="heading">
    <h2 class="section-title text-center">My Skills</h2>
    <div class="skills-section">
      <div class="wrapper">
        <div class="box-area skills-area">
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
      <div class="wrapper soft-skills-wrapper">
        <div class="box-area soft-skills-area">
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
  font-size: 2rem;
  font-weight: 700;
  color: rgb(70, 68, 68);
  padding-top: 2rem;
  text-align: center;
  font-family: poppins;
}

.wrapper {
  display: flex;
  justify-content: center;
  padding: 20px 5%;
}

.skills-area {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Displays skills in rows of three */
  grid-gap: 30px; /* Increased spacing between skills */
  margin-top: 30px;
}

.soft-skills-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.soft-skills-area {
  display: flex; /* Display soft skills side by side */
  gap: 30px; /* Space between each soft skill */
  flex-wrap: wrap; /* Allows wrapping if the screen is not wide enough */
}

.box {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease;
  padding: 0.5rem; /* Reduced padding to make boxes smaller */
  width: 200px; /* Set a width for skills and soft skills */
  height: 250px; /* Set a height for skills and soft skills */
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
  padding: 0 10px;
  text-align: center;
  font-size: 10px;
  transition: height 0.5s;
}

.overlay h3 {
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 50%;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  color: aliceblue;
}

.overlay h5,
p {
  color: rgb(133, 139, 145);
  font-size: 12px;
}

.box:hover img {
  transform: scale(1.02); /* Reduced scaling */
}

.box:hover .overlay {
  height: 100%;
}

/* Media Queries for Responsiveness */
@media (max-width: 1024px) {
  .skills-area {
    grid-template-columns: repeat(2, 1fr); /* Adjust columns to 2 for tablets */
    grid-gap: 20px;
  }

  .wrapper {
    padding: 10px 5%;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .box {
    width: 180px; /* Adjust box size for smaller screens */
    height: 220px;
  }
}

@media (max-width: 768px) {
  .skills-area {
    grid-template-columns: repeat(2, 1fr); /* Adjust columns to 2 for smaller screens */
    grid-gap: 20px;
  }

  .wrapper {
    padding: 10px 5%;
  }

  .box {
    width: 150px; /* Adjust box size for smaller screens */
    height: 200px;
  }

  .overlay h3 {
    font-size: 16px;
  }

  .section-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 480px) {
  .skills-area {
    grid-template-columns: 1fr; /* Adjust to single column for small screens */
    grid-gap: 15px;
  }

  .soft-skills-area {
    flex-direction: column; /* Stack soft skills vertically for small screens */
    gap: 15px;
  }

  .box {
    width: 120px; /* Adjust box size for smaller screens */
    height: 180px;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .overlay h3 {
    font-size: 14px;
  }
}
</style>
