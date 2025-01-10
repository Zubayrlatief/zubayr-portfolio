<template>
  <section id="home">
    <h2 class="section-title text-center">PROJECTS</h2>
    <h4 class="subheading-title text-center">projects completed with different goals using scrum methadolegy</h4>
    <div class="slider">
      <div class="list">
        <div v-for="(item, index) in items" :key="index" class="item" :class="{ active: index === itemActive }">
          <img :src="item.image" alt="item" />
          <div class="content">
            <p>{{ item.title }}</p>
            <h2>{{ item.subtitle }}</h2>
          </div>
        </div>
      </div>
      <div class="arrows">
        <button id="prev" @click="prevSlide">-</button>
        <button id="next" @click="nextSlide">+</button>
      </div>
      <div class="thumbnail">
        <div v-for="(thumbnail, index) in items" :key="index" class="box" :class="{ active: index === itemActive }"
          @click="selectSlide(index)">
          <img :src="thumbnail.image" alt="thumbnail" class="sr" />
          <div class="overlay">
            <div class="buttons">
              <button class="button-1" @click.stop="goToLink(thumbnail.github)">GitHub</button>
              <button class="button-2" @click.stop="goToLink(thumbnail.live)">Live Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      items: [
        {
          image: "https://zubayrlatief.github.io/Images-/hermessfitnessfinal.png",
          title: "Hermess Fitness | Backend project",
          subtitle: "Vue.js",
          github: "https://github.com/Zubayrlatief/capstone.git",
          live: "https://capstone-965d2.web.app/",
        },
        {
          image: "https://zubayrlatief.github.io/Images-/alphatower.png",
          title: "Alpha Tower | Website for bussiness",
          subtitle: "Wordpress",
          github: "https://alphatower.co.za/",
          live: "https://alphatower.co.za/",
        },
        {
          image: "https://zubayrlatief.github.io/Images-/trsecurityk9.png",
          title: "TR Security K9 | Website for business",
          subtitle: "Vue.js",
          github: "https://github.com/Zubayrlatief/trsecurityk9.git",
          live: "https://trsecurityk9.vercel.app/",
        },
        {
          image: "https://zubayrlatief.github.io/Images-/zarlogistic.png",
          title: "ZAR Logistics | Backend project",
          subtitle: "Vue.js",
          github: "https://github.com/Zubayrlatief/logistics.git",
          live: "https://logistics-hazel.vercel.app/",
        },
      ],
      itemActive: 0,
      refreshInterval: null,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    nextSlide() {
      this.itemActive = (this.itemActive + 1) % this.items.length;
      this.resetAutoSlide();
    },
    prevSlide() {
      this.itemActive = (this.itemActive - 1 + this.items.length) % this.items.length;
      this.resetAutoSlide();
    },
    selectSlide(index) {
      this.itemActive = index;
      this.resetAutoSlide();
    },
    startAutoSlide() {
      this.refreshInterval = setInterval(this.nextSlide, 5000);
    },
    resetAutoSlide() {
      clearInterval(this.refreshInterval);
      this.startAutoSlide();
    },
    goToLink(url) {
      if (url) {
        window.open(url, "_blank");
      } else {
        console.log("No URL provided");
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.refreshInterval);
  },
};
</script>


<style>
.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(70, 68, 68);
  padding-top: 2rem;
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


.slider {
  height: 120vh;
  animation: sliderAnimation 0.5s ease-out forwards;

}

.slider .list .item {
  position: absolute;
  inset: 0 0 0 0;
  overflow: hidden;
  opacity: 0;
  transition: .5s;
}

.slider .list .item img {
  width: 100%;
  height: 100%;
  margin-top: 5%;
  object-fit: contain;
}

.slider .list .item::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(to top, black 20%, transparent);
}

.slider .list .item .content {
  position: absolute;
  left: 10%;
  top: 20%;
  width: 500px;
  min-width: 80%;
  z-index: 1;
}

.slider .list .item .content p:nth-child(1) {
  text-transform: uppercase;
  letter-spacing: 10px;
}

.slider .list .item .content h2 {
  font-size: 100px;
  margin: 0;
}

.slider .list .item.active {
  opacity: 1;
  z-index: 10;
}

@keyframes showContent {
  to {
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
}

.slider .list .item.active p:nth-child(1),
.slider .list .item.active h2,
.slider .list .item.active p:nth-child(3) {
  transform: translateY(30px);
  filter: blur(20px);
  opacity: 0;
  animation: showContent .5s .7s ease-in-out 1 forwards;
  color: #afafaf;
}

.slider .list .item.active h2 {
  animation-delay: 1s;
  color: #afafaf;
}

.slider .list .item.active p:nth-child(3) {
  animation-duration: 1.3s;

}

.arrows {
  position: absolute;
  top: 30%;
  right: 50px;
  z-index: 100;
}

.arrows button {
  background-color: rgba(129, 126, 126, 0.333);
  border: none;
  font-family: monospace;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: x-large;
  color: #eee;
  transition: .5s;
}

.arrows button:hover {
  background-color: #eee;
  color: black;
}

.thumbnail {
  position: absolute;
  bottom: 50px;
  z-index: 11;
  display: flex;
  gap: 10px;
  width: 100%;
  height: 250px;
  padding: 0 50px;
  box-sizing: border-box;
  overflow: auto;
  justify-content: center;
}

.thumbnail .box {
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease;
  width: 180px;
  height: 220px;
  filter: brightness(.5);
}

.thumbnail .box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.thumbnail .box.active {
  filter: brightness(1.5);
}

.thumbnail .overlay {
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(28, 28, 28, 0.8) 58%);
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s;
}

.thumbnail .box:hover .overlay {
  opacity: 1;
}

.thumbnail .buttons {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.thumbnail .button-1,
.thumbnail .button-2 {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #554d4d;
  cursor: pointer;
  transition: background-color 0.3s;
}

.thumbnail .button-1:hover,
.thumbnail .button-2:hover {
  background-color: #2a2727;
}

.thumbnail::-webkit-scrollbar {
  width: 0;
}

.thumbnail .item {
  width: 150px;
  height: 220px;
  filter: brightness(.5);
  transition: .5s;
  flex-shrink: 0;
}

.thumbnail .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.thumbnail .item.active {
  filter: brightness(1.5);
}

.thumbnail .item .content {
  position: absolute;
  inset: auto 10px 10px 10px;
}

@media screen and (max-width: 678px) {
  .thumbnail {
    justify-content: start;
  }

  .slider .list .item .content h2 {
    font-size: 60px;
  }

  .arrows {
    top: 10%;
  }
}


@keyframes sliderAnimation {
  from {
    opacity: 0;
    transform: translateY(200px) scale(0.3);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
/* General responsive design for tablets */
/* General responsive design for tablets */
@media screen and (max-width: 1024px) {
  .section-title {
    font-size: 1.8rem;
  }

  .subheading-title {
    font-size: 1.2rem;
  }

  .slider {
    height: 100vh;
  }

  .slider .list .item .content h2 {
    font-size: 80px;
  }

  .thumbnail {
    height: 200px;
  }

  .thumbnail .box {
    width: 150px;
    height: 180px;
  }

  .arrows {
    right: 30px;
  }
}

/* Mobile phones */
@media screen and (max-width: 678px) {
  .section-title {
    font-size: 1.5rem;
  }

  .subheading-title {
    font-size: 1rem;
  }

  .slider {
    height: 80vh;
  }

  .slider .list .item .content h2 {
    font-size: 50px;
  }

  .arrows {
    top: 5%;
  }

  .thumbnail {
    height: 150px;
    justify-content: start;
  }

  .thumbnail .box {
    width: 120px;
    height: 150px;
  }

  .thumbnail .overlay {
    padding: 5px;
  }

  .thumbnail .buttons {
    flex-direction: column;
    gap: 3px;
  }

  .thumbnail .button-1,
  .thumbnail .button-2 {
    font-size: 0.8rem;
    padding: 3px 7px;
  }
}

/* Small mobile screens */
@media screen and (max-width: 480px) {
  .slider {
    height: 50vh; /* Reduce slider height for smaller screens */
  }

  .slider .list .item img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
  p{

    font-size: 10px;
  }

  .slider .list .item .content {
    left: 5%;
    top: 5%;
    padding: 10px;
  }

  .slider .list .item .content h2 {
    font-size: 2rem; /* Smaller heading size */
    line-height: 1.2;
  }

  .slider .list .item .content p {
    font-size: 1rem; /* Smaller text size */
  }

  .thumbnail {
    height: 100px; /* Reduce thumbnail height */
    padding: 5px 10px;
  }

  .thumbnail .box {
    width: 90px;
    height: 100px; /* Smaller thumbnails */
  }

  .thumbnail .overlay {
    padding: 5px;
    font-size: 0.9rem; /* Smaller overlay text */
  }

  .arrows {
    top: 20%;
    right: 5px;
    font-size: 1.5rem; /* Smaller arrow size */
  }
}


</style>