<template>
    <div class="heading">
      <h2 class="section-title text-center">Places I have studied</h2>
      <div class="education-section">
        <div class="wrapper">
          <div class="box-area">
            <!-- Loop through the educationData to display each education item -->
            <div class="box" v-for="education in educationData" :key="education.institution">
              <img
                :src="education.image"
                :alt="education.institution"
                class="sr"
                style="width: 100%; height: auto; border-radius: 10px;"
              />
              <div class="overlay">
                <h3>{{ education.degree }}</h3>
                <h5>{{ education.institution }}</h5>
                <p>{{ education.year }}</p>
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
        educationData: [
          {
            degree: "NSC Bacholors",
            institution: "Claremont High School",
            year: "2019-2023",
            image: "https://zubayrlatief.github.io/Images-/Untitled design.png"
          },
          {
            degree: "Academy",
            institution: "Life Choices",
            year: "2024-2024",
            image: "https://zubayrlatief.github.io/Images-/Untitled%20design%20(1).png"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .heading {
    background-color: rgb(0, 0, 0);
    
    padding-top: 2rem;
  }
  
  .education-section {
    background-color: #000000;
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
    margin-top: 10px;
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
  </style>
  