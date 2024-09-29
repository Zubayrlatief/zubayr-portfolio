<template>
  <section id="home">
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
      <!-- button arrows -->
      <div class="arrows">
        <button id="prev" @click="prevSlide">-</button>
        <button id="next" @click="nextSlide">+</button>
      </div>
      <!-- updated thumbnail -->
      <div class="thumbnail">
        <div
          v-for="(thumbnail, index) in items"
          :key="index"
          class="box"
          :class="{ active: index === itemActive }"
          @click="selectSlide(index)"
        >
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
          image: "https://zubayrlatief.github.io/Images-/hermessfitness.png",
          title: "Hermess Fitness",
          subtitle: "Vue.js",
          github: "https://github.com/Zubayrlatief/capstone.git",
          live: "https://capstone-965d2.web.app/",
        },
        {
          image: "https://zubayrlatief.github.io/capestone-hosted-images/regalredifiend.png ",
          title: "Regal Redifiend",
          subtitle: "Javascript",
          github: "https://github.com/Zubayrlatief/Regal-Redifiend-Javascript-EOMP.git",
          live: "https://javascript-eomp-2.vercel.app/",
        },
        {
          image: "https://zubayrlatief.github.io/Images-/ZMpetshop.png",
          title: "Zubayr and Mapule Pet Shop",
          subtitle: "Vue.js",
          github: "https://github.com/Zubayrlatief/node-eomp.git",
          live: "https://node-eomp.vercel.app/",
        },
        {
          image: "https://zubayrlatief.github.io/Images-/weather.io.png",
          title: "Weather.io",
          subtitle: "Vue.js",
          github: "https://github.com/Zubayrlatief/Weather-io.git",
          live: "https://weather-io-wine.vercel.app/",
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

.slider{
    height: 82vh;
    animation: sliderAnimation 0.5s ease-out forwards; /* Added animation */
    
}

.slider .list .item{
    position: absolute;
    inset: 0 0 0 0;
    overflow: hidden;
    opacity: 0;
    transition: .5s;
}

.slider .list .item img{
    width: 100%;
    height: 100%;
    margin-top: 5%;
    object-fit: contain;
}

.slider .list .item::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: linear-gradient(
        to top, black 30%, transparent
    );
}

.slider .list .item .content{
    position: absolute;
    left: 10%;
    top: 20%;
    width: 500px;
    min-width: 80%;
    z-index: 1;
}

.slider .list .item .content p:nth-child(1){
        text-transform: uppercase;
        letter-spacing: 10px;
}

.slider .list .item .content h2 {
    font-size: 100px;
    margin: 0;
}

.slider .list .item.active{
    opacity: 1;
    z-index: 10;
}

@keyframes showContent {
    to{
        transform: translateY(0);
        filter:blur(0);
        opacity: 1;
    }
}

.slider .list .item.active p:nth-child(1),
.slider .list .item.active h2,
.slider .list .item.active p:nth-child(3){
    transform: translateY(30px);
    filter: blur(20px);
    opacity: 0;
    animation: showContent .5s .7s ease-in-out 1 forwards;
    color: #afafaf;
}
.slider .list .item.active h2{
    animation-delay: 1s;
    color: #afafaf;
}
.slider .list .item.active p:nth-child(3){
    animation-duration: 1.3s;
    
}
.arrows{
    position: absolute;
    top: 30%;
    right: 50px;
    z-index: 100;
}
.arrows button{
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
.arrows button:hover{
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
  width: 150px; /* Adjust width as needed */
  height: 220px; /* Adjust height as needed */
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

.thumbnail .button-1, .thumbnail .button-2 {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #554d4d;
  cursor: pointer;
  transition: background-color 0.3s;
}

.thumbnail .button-1:hover, .thumbnail .button-2:hover {
  background-color: #2a2727;
}

.thumbnail::-webkit-scrollbar{
    width: 0;
}
.thumbnail .item{
    width: 150px;
    height: 220px;
    filter: brightness(.5);
    transition: .5s;
    flex-shrink: 0;
}
.thumbnail .item img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.thumbnail .item.active{
    filter: brightness(1.5);
}
.thumbnail .item .content{
    position: absolute;
    inset: auto 10px 10px 10px;
}
@media screen and (max-width: 678px) {
    .thumbnail{
        justify-content: start;
    }
    .slider .list .item .content h2{
        font-size: 60px;
    }
    .arrows{
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
</style>