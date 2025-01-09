<template>
  <section id="about" class="about">
    <div class="main">
      <img src="https://zubayrlatief.github.io/hosted-images/myportfolioimg.jpg" alt="Profile Image" class="fade-in hidden">
      <div class="about-text hidden">
        <h1><span class="dev">ZUBAYR ABDULLATIEF</span></h1>
        <h5><span class="dev">Aspiring Full Stack Developer</span></h5>
        <p>
          Providing solutions in the front and backend of your company.  
          Entering the world of software is exciting.  
          Ample knowledge to gain and limitless ceilings to reach.  
          Obsessed and passionate, I want to learn everything about it.  
          Keeping disciplined and healthy is a must for me; I work out 5 times a week,  
          having a love for surfing and gaining knowledge in every aspect possible.
        </p>
        <button type="button" @click="scrollToFooter">Get in touch</button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';

export default {
  methods: {
    scrollToFooter() {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    }
  },
  setup() {
    let observer = null;

    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        },
        { threshold: 0.2 }
      );

      const hiddenElements = document.querySelectorAll('.hidden');
      hiddenElements.forEach((el) => observer.observe(el));
    });

    onBeforeUnmount(() => {
      if (observer) observer.disconnect();
    });
  }
};
</script>

<style scoped>
.about {
  width: 100%;
  padding: 78px 0;
  background-color: black;
}

p{
 color: rgb(255, 255, 255);
}

.dev {
  color: rgb(91, 85, 85);
  font-size: 1.5rem;
  text-transform: capitalize;
  margin-bottom: 25px;
  letter-spacing: 10px;
}

.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
}

.hidden {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.hidden.show {
  opacity: 1;
  transform: translateY(0);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 4s ease-in forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.about img {
  height: auto;
  width: 100%;
  max-width: 350px;
  margin-right: 80px;
}

.about-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.about-text h1 {
  color: white;
  font-weight: bolder;
  font-size: 2rem;
  text-transform: capitalize;
  margin-bottom: 20px;
}

.about-text h5 {
  color: white;
  font-size: 1.5rem;
  text-transform: capitalize;
  margin-bottom: 25px;
  letter-spacing: 10px;
}

span {
  color: rgb(253, 253, 253);
}

.about-text p {
  color: rgb(78, 72, 72);
  line-height: 1.6;
  font-size: 1.2rem;
  margin-bottom: 45px;
}

button {
  background: khaki;
  color: rgb(78, 72, 72);
  text-decoration: none;
  border: 2px solid transparent;
  padding: 13px 30px;
  transition: 0.4s;
  border-radius: 30px;
  font-size: 1rem;
}

button:hover {
  background: transparent;
  border: 2px solid #f9004d;
}

@media (max-width: 480px) {
  .main {
    align-items: center;
  }

  .about img {
    max-width: 80%;
    margin: 0 10px 0 0;
    align-items: center;
  }

  .about-text {
    max-width: 95%;
    margin-top: 10%
    
  }

  .about-text h1 {
    font-size: 1.8rem;
  }

  .about-text h5 {
    font-size: 0.2rem;
  }

  .about-text p {
    font-size: 0.8rem;
    margin: 0.8rem;
    margin-bottom: 2rem;
  }

  button {
    font-size: 0.8rem;
  }
}
</style>
