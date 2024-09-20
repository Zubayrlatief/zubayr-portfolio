<template>
  <div class="heading">
    <h2 class="section-title text-center">My Skills</h2>
    <div class="skills-section" data-aos="zoom-out-up" data-aos-duration="1500">
      <div class="skills-grid">
        <div class="card" v-for="skill in skillsData" :key="skill.name">
          <img
            :src="skill.github"
            :alt="skill.name"
            class="card-img-top img-fluid zoom-effect"
            style="width: 85px; height: 75px"
          />
          <div class="card-body">
            <h5>{{ skill.name }}</h5>
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
    };
  },
  mounted() {
    fetch(
      "https://jords-springy.github.io/first_api/data/index.json?_=" +
        new Date().getTime()
    )
      .then((response) => response.json())
      .then((data) => {
        this.skillsData = data.skills;
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style scoped>
.heading {
  background-color: rgb(0, 0, 0);
}

.skills-section {
  background-color: #000000;
  padding: 100px 0;
  width: 100%;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(70, 68, 68);
  margin-bottom: 50px;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
  gap: 20px;
  justify-items: center;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171818;
  border: none;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  max-width: 300px;
  width: 100%;
  text-align: center;
}

.card:hover {
  transform: scale(1.05);
}

.card-body h5 {
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 15px;
}

.zoom-effect {
  animation: zoom-effect 3s infinite;
}

@keyframes zoom-effect {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Responsive Adjustments */

/* For medium screens (up to 992px), display 2 cards per row */
@media (max-width: 992px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* For small screens (up to 768px), display 1 card per row */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

  </style>
   