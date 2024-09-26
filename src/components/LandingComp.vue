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
    // After 5 seconds, trigger the slide-up effect
    setTimeout(() => {
      this.isVisible = false;
    }, 2000);
  },
};
</script>

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
  font-size: 3rem;
  margin: 0;
}

.animated-subheading {
  font-size: 1.5rem;
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
  from, to {
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

.full-page-component.slide-up {
  transform: translateY(-100%);
  opacity: 0;
}
</style>



<!-- https://zubayrlatief.github.io/hosted-images/myportfolioimg.jpg -->