<template>
  <Transition :duration="550">
    <div v-if="isVisible" :class="['full-page-component', { 'slide-up': !isVisible }]">
      <div class="content-container">
        <div class="heading-container">
          <h1>Zubayr Abdullatief</h1>
          <h2 class="animated-subheading">Aspiring software developer</h2>
        </div>
        <img loading="lazy" src="https://zubayrlatief.github.io/Images-/SMILEEDIT.jpg" alt="Disappearing Image" />
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = false;
    }, 3500);
  },
};
</script>
methods: {
redirectToCertificates() {
window.open('https://drive.google.com/file/d/18mLnKsP1FTXvYsCqfQTo3FbHUNt2YxQX/view?usp=sharing', '_blank');
}
}

<!-- <div class="btn-container">
<button class="btn" @click="redirectToCertificates">
  <img src="https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons@master/png/aws.png" alt="AWS Logo" class="btn-image" />
  <span>View Certificates</span>
</button> -->
<style scoped>
.full-page-component {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 9999;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.content-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.heading-container {
  text-align: left;
  color: white;
  margin: 0 20px;
}

h1 {
  font-size: 3rem;
  margin: 0;
}

.animated-subheading {
  font-size: 1.5rem;
  margin-top: 10px;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid white;
  animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink-caret {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: white;
  }
}

.full-page-component img {
  max-width: 40%;
  max-height: 60vh;
  object-fit: cover;
}

/* media */
@media (max-width: 1024px) {
  h1 {
    font-size: 2.5rem;
  }

  .animated-subheading {
    font-size: 1.2rem;
  }

  .full-page-component img {
    max-width: 50%;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .animated-subheading {
    font-size: 1rem;
  }

  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .full-page-component img {
    max-width: 40%;
    max-height: 50vh;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem;
  }

  .animated-subheading {
    font-size: 0.9rem;
  }

  .full-page-component img {
    max-width: 90%;
    max-height: 60vh;
    padding-bottom: 80%;
  }
}

.full-page-component.slide-up {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
