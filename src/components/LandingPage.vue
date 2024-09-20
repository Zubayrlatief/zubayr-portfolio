<template>
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
      <!-- thumbnail -->
      <div class="thumbnail">
        <div
          v-for="(thumbnail, index) in items"
          :key="index"
          class="item"
          :class="{ active: index === itemActive }"
          @click="selectSlide(index)"
        >
          <img :src="thumbnail.image" alt="thumbnail" />
          <div class="content">{{ thumbnail.title }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          {
            image: "https://zubayrlatief.github.io/Images-/hermessfitness.png",
            title: "Hermess Fitness",
            subtitle: "Gym Clothes ",
          },
          {
            image: "https://zubayrlatief.github.io/Images-/RegalRedifiend.png",
            title: "Regal Redifiend",
            subtitle: "Old Fashion",
          },
          {
            image: "https://zubayrlatief.github.io/Images-/ZMpetshop.png",
            title: "Zubayr and Mapule Pet Shop",
            subtitle: "Pet Shop",
          },
          {
            image: "https://zubayrlatief.github.io/Images-/Calculator.png",
            title: "Keyboard",
            subtitle: "Keyboard",
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
      showSlider() {
        // This method is now handled reactively by Vue's reactivity system.
      },
      startAutoSlide() {
        this.refreshInterval = setInterval(this.nextSlide, 5000);
      },
      resetAutoSlide() {
        clearInterval(this.refreshInterval);
        this.startAutoSlide();
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
    margin-top: 6%;
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
.thumbnail{
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
</style>