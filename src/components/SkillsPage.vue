<template>
  <div id="skills" class="heading">
    <h2 class="section-title text-center">MY SKILLS</h2>
    <h4 class="subheading-title text-center">software skills i actively use and display proficiency in</h4>
    <div class="skills-section">
      <div class="wrapper">
        <div class="box-area skills-area">
          <div class="box" v-for="skill in skillsData" :key="skill.name">
            <img :src="skill.github" :alt="skill.name" class="sr"
              style="width: 100%; height: auto; border-radius: 10px;" />
            <div class="overlay">
              <h3>{{ skill.name }}</h3>
              <h5>{{ skill.competency }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="softW-skills" class="heading">
      <h2 class="section-title text-center">MY SOFT SKILLS</h2>
      <h4 class="subheading-title text-center">skills that mainly define me in the workspace</h4>
      <div class="wrapper soft-skills-wrapper">
        <div class="box-area soft-skills-area">
          <div class="box" v-for="softSkill in softSkillsData" :key="softSkill.title">
            <img :src="softSkill.url" :alt="softSkill.title" class="sr"
              style="width: 100%; height: auto; border-radius: 10px;" />
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
      skillsData: [],
      softSkillsData: [],
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
        console.log(data.skills);
        this.skillsData = data.skills.map(skill => ({
          ...skill,
          competency: skill.competency || 5
        }));
        this.softSkillsData = data.softSkills;
      })
      .catch((error) => console.error("Error fetching skills data:", error));
  },
};
</script>

<style scoped>
.heading {
  padding-top: 5rem;
  background-color: rgb(0, 0, 0);
}

.skills-section,
.soft-skills-section {
  padding-top: 5rem;
  padding-bottom: 5rem;
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

.subheading-title {
  font-size: 1.5rem;
  font-weight: 200;
  color: rgb(48, 46, 46);
  margin-bottom: 50px;
  text-align: center;
  font-family: poppins;
}

.wrapper {
  display: flex;
  justify-content: center;
  padding: 20px 20%;
}

.skills-area {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
  margin-top: 30px;
}

.soft-skills-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.soft-skills-area {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.box {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 0.5rem;
  width: 200px;
  height: 250px;
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
  transform: scale(1.1); /* Scale up the image slightly */
}

.box:hover .overlay {
  height: 100%;
}

.box:hover {
  transform: scale(1.05); /* Add a small scale transformation for the box */
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5); /* Add a shadow on hover */
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .skills-area {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  .wrapper {
    padding: 10px 5%;
  }

  .box {
    width: 150px;
    height: 200px;
  }

  .overlay h3 {
    font-size: 16px;
  }

  .section-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 500px) {
  .skills-area {
    grid-template-columns: 1fr;
    grid-gap: 15px;
    justify-content: center;
  }

  .soft-skills-area {
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  .box-area {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
}

@media (max-width: 1124px) {
  .box-area{
    max-width: 100%;
    margin-right: 5%;
  }
  .box{
    max-width: 6rem;

  }
}

</style>
