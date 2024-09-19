<template>
    <div class="heading">
      <h2 class="section-title text-center">My Skills</h2>
      <div class="skills-section d-flex justify-content-center" data-aos="zoom-out-up" data-aos-duration="1500">
        <div class="row justify-content-center">
          <div class="col-lg-3 col-md-6 col-sm-6 col-12 mb-4" v-for="skill in skillsData" :key="skill.name">
            <div class="card text-center">
              <img
                :src="skill.github"
                :alt="skill.name"
                class="card-img-top img-fluid zoom-effect mx-auto"
                style="width: 85px; height: 75px"
              />
              <div class="card-body">
                <h5>{{ skill.name }}</h5>
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
  }
  
  .card {
    background-color: #171818;
    border: none;
    padding: 20px;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
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
  
  /* Responsive Layout Adjustments */
  
  /* Large screens */
  @media (min-width: 1200px) {
    .skills-section {
      padding: 80px 0;
    }
    .section-title {
      font-size: 3rem;
    }
  }
  
  /* Medium screens */
  @media (min-width: 768px) and (max-width: 1200px) {
    .skills-section {
      padding: 60px 0;
    }
    .section-title {
      font-size: 2.5rem;
    }
    .card-body h5 {
      font-size: 1.1rem;
    }
  }
  
  /* Small screens */
  @media (max-width: 768px) {
    .skills-section {
      padding: 40px 0;
    }
    .section-title {
      font-size: 2rem;
    }
    .card-body h5 {
      font-size: 1rem;
    }
  }
  
  /* Extra small screens */
  @media (max-width: 300px) {
    .skills-section {
      padding: 20px 0;
    }
    .section-title {
      font-size: 1.5rem;
    }
  }
  </style>
   