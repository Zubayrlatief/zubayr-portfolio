<template>
  <div id="Education" class="heading">
    <h2 class="section-title text-center">EDUCATION AND EXPERIENCE</h2>
    <h4 class="subheading-title text-center">education i have competently completed and relevent Experience</h4>
    <div class="education-section">
      <div class="wrapper">
        <div class="box-area">
          <div class="box" v-for="education in educationData" :key="education.institution">
            <img :src="education.image" :alt="education.institution" class="sr"
              style="width: 100%; height: auto; border-radius: 10px" />
            <div class="overlay">
              <h3>{{ education.degree }}</h3>
              <h5>{{ education.institution }}</h5>
              <p>{{ education.year }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-container">
      <button class="btn" @click="redirectToCertificates">
        <img src="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons@master/png/aws.png" alt="AWS Logo"
          class="btn-image" />
        <span>View Certificates</span>
      </button>
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
          image: "https://zubayrlatief.github.io/Images-/claremontcorrect.png",
        },
        {
          degree: "Academy",
          institution: "Life Choices",
          year: "2024-2024",
          image:
            "https://zubayrlatief.github.io/capestone-hosted-images/lifechoices.png",
        },
      ],
    };
  },
  methods: {
    redirectToCertificates() {
      window.open('https://drive.google.com/file/d/18mLnKsP1FTXvYsCqfQTo3FbHUNt2YxQX/view?usp=sharing', '_blank');
    }
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
  padding: 40px 10%;
}

.box-area {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .box-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .box {
    margin: 10px;
    flex: 1 1 calc(33.33% - 20px);
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
  font-family: "Bebas Neue", sans-serif;
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

@media (max-width: 1024px) {
  .section-title {
    font-size: 2rem;
  }

  .box {
    padding: 4rem;
  }

  .wrapper {
    padding: 30px 5%;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.8rem;
  }

  .box {
    padding: 3rem;
  }

  .wrapper {
    padding: 20px 5%;
  }

  .overlay h3 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.5rem;
  }

  .box {
    padding: 2rem;
  }

  .wrapper {
    padding: 10px 5%;
  }

  .overlay h3 {
    font-size: 20px;
  }

  .overlay {
    padding: 0 20px;
  }
}

.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  --color: #4f5c59;
  --color2: rgb(130, 147, 152);
  background-color: transparent;
  transition: 0.5s;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  font-weight: 300;
  font-size: 17px;
  font-family: poppins;
  text-transform: uppercase;
  color: var(--color);
}

.btn-image {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

.inner-button {
  padding: 0.4em 1em;
  background-color: var(--color);
  color: rgb(88, 78, 78);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
  margin-left: 10px;
}

.btn {
  padding: 2em;
  flex-direction: column;
  align-items: center;
}

.inner-button:hover {

  background-color: var(--color2);
}



.btn::before {
  margin: 2em;
  top: -50%;
  left: -25%;
  transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
}

.btn:hover::before {
  transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
}

.btn:hover::after {
  transform: skew(45deg) translate(-50%, -50%);
}

.btn:hover {
  color: var(--color2);
}

.btn:active {
  filter: brightness(0.7);
  transform: scale(0.98);
}
</style>
