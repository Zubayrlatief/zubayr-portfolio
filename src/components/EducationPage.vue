<template>
  <div id="Education" class="heading">
    <h2 class="section-title text-center">EDUCATION AND EXPERIENCE</h2>
    <h4 class="subheading-title text-center">
      Education I have competently completed and relevant experience
    </h4>
    <div class="education-section">
      <div class="wrapper">
        <div class="box-area">
          <div class="box" v-for="education in educationData" :key="education.institution">
            <img
              :src="education.image"
              :alt="education.institution"
              class="sr"
              style="width: 100%; height: auto; border-radius: 10px"
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
    <div class="btn-container">
      <button class="btn" @click="redirectToCertificates">
        <img
          src="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons@master/png/aws.png"
          alt="AWS Logo"
          class="btn-image"
        />
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
        {
          degree: "B-com Information systems",
          institution: "Mancosa",
          year: "2024-2027",
          image:
            "https://zubayrlatief.github.io/Images-/MANCOSA.jpg",
        },
      ],
    };
  },
  methods: {
    redirectToCertificates() {
      window.open(
        "https://drive.google.com/file/d/18mLnKsP1FTXvYsCqfQTo3FbHUNt2YxQX/view?usp=sharing",
        "_blank"
      );
    },
  },
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
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
}

.box {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  transition: transform 0.3s ease;
  flex: 1 1 calc(30% - 40px);
  max-width: calc(30% - 40px);
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
  font-size: 25px;
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

@media (max-width: 768px) {
  .box {
    flex: 1 1 calc(100% - 20px);
    max-width: calc(100% - 20px);
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
</style>
