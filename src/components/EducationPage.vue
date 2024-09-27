<template>
  <div id="Education" class="heading">
    <h2 class="section-title text-center">Education & Experience</h2>
    <div class="education-section">
      <div class="wrapper">
        <div class="box-area">
          <!-- Loop through the educationData to display each education item -->
          <div class="box" v-for="education in educationData" :key="education.institution">
            <img
              :src="education.image"
              :alt="education.institution"
              class="sr"
              style="width: 140%; height: auto; border-radius: 10px;"
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
                  degree: "NSC Bachelor",
                  institution: "Claremont High School",
                  year: "2019-2023",
                  image: "https://zubayrlatief.github.io/Images-/claremontcorrect.png"
              },
              {
                  degree: "Academy",
                  institution: "Life Choices",
                  year: "2024-2024",
                  image: "https://zubayrlatief.github.io/Images-/lifechoices.png"
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Grid adjusts based on screen size */
  grid-gap: 40px;
  margin-top: 10px;
}

/* Responsive Flexbox for smaller screens */
@media (max-width: 768px) {
  .box-area {
      display: flex; /* Change to flexbox for smaller screens */
      flex-wrap: wrap; /* Allow wrapping to next line */
      justify-content: center; /* Center the items */
  }

  .box {
      margin: 10px; /* Add some margin between boxes */
      flex: 1 1 calc(33.33% - 20px); /* Make each box take up one-third of the width */
  }
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

/* Media Queries for Responsiveness */
@media (max-width: 1024px) {
  .section-title {
      font-size: 2rem; /* Adjust the title font size */
  }

  .box {
      padding: 4rem; /* Reduce padding for medium screens */
  }

  .wrapper {
      padding: 30px 5%; /* Adjust wrapper padding */
  }
}

@media (max-width: 768px) {
  .section-title {
      font-size: 1.8rem; /* Adjust title font size for smaller screens */
  }

  .box {
      padding: 3rem; /* Reduce padding for smaller screens */
  }

  .wrapper {
      padding: 20px 5%; /* Adjust wrapper padding */
  }

  .overlay h3 {
      font-size: 24px; /* Reduce the heading size in the overlay */
  }
}

@media (max-width: 480px) {
  .section-title {
      font-size: 1.5rem; /* Further adjust title font size for mobile */
  }

  .box {
      padding: 2rem; /* Reduce padding for mobile */
  }

  .wrapper {
      padding: 10px 5%; /* Further adjust wrapper padding */
  }

  .overlay h3 {
      font-size: 20px; /* Further reduce the heading size in the overlay */
  }

  .overlay {
      padding: 0 20px; /* Reduce padding in the overlay */
  }
}
</style>
