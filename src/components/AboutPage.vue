<template>
  <section id="about" class="about">
    <div class="main">
      <div class="card">
        <div class="front">
          <img
            src="https://zubayrlatief.github.io/hosted-images/myportfolioimg.jpg"
            alt="Profile Image"
            class="fade-in hidden"
          />
        </div>
        <div class="back">
          <div class="social-links">
            <a href="#" class="social-icon">Instagram</a>
            <a href="#" class="social-icon">TikTok</a>
          </div>
        </div>
      </div>
      <div class="about-text">
        <h1><span class="dev">ZUBAYR ABDULLATIEF</span></h1>
        <h5><span class="dev">Aspiring Full Stack Developer</span></h5>
        <p>
          Providing solutions in the front and backend of your company.
          Entering the world of software is exciting. Ample knowledge to gain
          and limitless ceilings to reach. Obsessed and passionate, I want to
          learn everything about it. Keeping disciplined and healthy is a must
          for me; I work out 5 times a week, having a love for surfing and
          gaining knowledge in every aspect possible.
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
    },
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
  },
};
</script>

<style scoped>
.about {
  width: 100%;
  padding: 20px 0;
  background-color: black;
}

p {
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
  justify-content: center;
  align-items: center;
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

.card {
  width: 100%;
  max-width: 350px;
  height: 350px;
  perspective: 1000px;
  margin: 0 auto;
}

.front,
.back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  border-radius: 10px;
  transition: transform 0.6s;
}

.front {
  background-color: white;
}

.front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.back {
  background-color: #333;
  transform: rotateY(180deg);
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.social-icon {
  color: white;
  text-decoration: none;
  margin: 10px 0;
  font-size: 1.2rem;
}

.card:hover .front {
  transform: rotateY(180deg);
}

.card:hover .back {
  transform: rotateY(0);
}

.about-text {
  width: 100%;
  max-width: 55%;
  padding: 20px;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
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

/* Media Queries */
@media (max-width: 1024px) {
  .main {
    flex-direction: column;
    align-items: center;
  }

  .card {
    margin: 20px auto;
  }

  .about-text {
    margin: 20px auto;
    text-align: center;
    max-width: 90%; /* Allow more space for text */
    padding: 2rem;
  }

  .about-text h1 {
    font-size: 1.5rem;
  }

  .about-text h5 {
    font-size: 1.2rem;
  }

  .about-text p {
    font-size: 1.1rem;
  }

  button {
    font-size: 1.2rem;
    padding: 10px 25px;
  }
}

@media (max-width: 768px) {
  .main {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
    margin: 20px auto;
  }

  .about-text {
    margin: 20px auto;
    text-align: center;
    max-width: 90%;
  }

  .about-text h1 {
    font-size: 1.4rem;
  }

  .about-text h5 {
    font-size: 1rem;
  }

  .about-text p {
    font-size: 1rem;
  }

  button {
    font-size: 1.1rem;
    padding: 12px 28px;
  }
}

@media (max-width: 480px) {
  .main {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
    height: auto;
  }

  .front img {
    width: 100%;
    height: auto;
  }

  .about-text {
    margin-top: 67vh;
    text-align: center;
    max-width: 90%;
    padding: 1.5rem;
  }

  .about-text h1 {
    font-size: 1.2rem;
  }

  .about-text h5 {
    font-size: 1rem;
  }

  .about-text p {
    font-size: 0.9rem;
  }

  button {
    font-size: 1rem;
    padding: 10px 25px;
  }
}
</style>
