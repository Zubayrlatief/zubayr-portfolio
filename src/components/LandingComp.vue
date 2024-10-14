<template>
  <Transition :duration="550">
    <div v-if="isVisible" :class="['full-page-component', { 'slide-up': !isVisible }]">
      <div class="content-container">
        <div class="heading-container">
          <h1>Zubayr Abdullatief</h1>
          <h2 class="animated-subheading">Aspiring software developer</h2>
        </div>
        <img loading="lazy" src="https://zubayrlatief.github.io/Images-/zubayrimage.jpg" alt="Disappearing Image" />
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
    // After 3.5 seconds, trigger the slide-up effect
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
  background-color: black; /* Ensures full black background */
  z-index: 9999;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.content-container {
  display: flex;
  flex-direction: row; /* Make image and text side by side */
  justify-content: center;
  align-items: center;
  gap: 20px; /* Add some space between the image and the text */
}

.heading-container {
  text-align: left; /* Align the text to the left */
  color: white;
  margin: 0 20px;
}

h1 {
  font-size: 3rem; /* Base font size */
  margin: 0;
}

.animated-subheading {
  font-size: 1.5rem; /* Base font size */
  margin-top: 10px;
  overflow: hidden; /* Ensure the text stays within the bounds */
  white-space: nowrap; /* Prevent text from wrapping */
  border-right: 2px solid white; /* Creates a typing cursor effect */
  animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
}

/* Typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* Blinking cursor effect */
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
  max-width: 40%; /* Adjust image width */
  max-height: 60vh; /* Prevent the image from taking too much height */
  object-fit: cover; /* Makes the image scale well within its container */
}

/* Responsive Styles */
@media (max-width: 1024px) {
  h1 {
    font-size: 2.5rem; /* Reduce font size for medium screens */
  }

  .animated-subheading {
    font-size: 1.2rem; /* Reduce subheading font size */
  }

  .full-page-component img {
    max-width: 50%; /* Adjust image width */
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem; /* Further reduce font size for smaller screens */
  }

  .animated-subheading {
    font-size: 1rem; /* Further reduce subheading font size */
  }

  .content-container {
    flex-direction: column; /* Stack image above text */
    align-items: center; /* Center the content */
  }

  .full-page-component img {
    max-width: 70%; /* Adjust image width */
    max-height: 50vh; /* Adjust max height */
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 1.5rem; /* Further reduce font size for mobile */
  }

  .animated-subheading {
    font-size: 0.9rem; /* Further reduce subheading font size */
  }

  .full-page-component img {
    max-width: 90%; /* Adjust image width for small screens */
    max-height: 60vh; /* Adjust max height */
    padding-bottom: 80%;
  }
}

.full-page-component.slide-up {
  transform: translateY(-100%);
  opacity: 0;
}
</style>


<!-- https://zubayrlatief.github.io/hosted-images/myportfolioimg.jpg -->