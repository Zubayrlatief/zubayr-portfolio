<template>
    <!-- slider -->
  <div class="slider">
<!-- items -->
 <div class="list">
    <div class="item active">
        <img src="https://zubayrlatief.github.io/capestone-hosted-images/landingpic.png" alt="" class="item">
        <div class="content">
            <p>Hermess Fitness</p>
            <h2>slider 1</h2>
            <p></p>
        </div>
    </div>
 </div>

 <!-- items -->
 <div class="list">
    <div class="item">
        <img src="https://zubayrlatief.github.io/capestone-hosted-images/landing%20pic%202.png" alt="" class="item">
        <div class="content">
            <p>Regal Redifiend</p>
            <h2>slider 2</h2>
            <p></p>
        </div>
    </div>
 </div>

 <!-- items -->
 <div class="list">
    <div class="item">
        <img src="https://zubayrlatief.github.io/hosted-images/shoulder.jpg" alt="" class="item">
        <div class="content">
            <p>Zubayr & Mapule Pet Shop</p>
            <h2>slider 3</h2>
            <p></p>
        </div>
    </div>
 </div>

 <!-- items -->
 <div class="list">
    <div class="item">
        <img src="https://zubayrlatief.github.io/capestone-hosted-images/landing%20pic%202.png" alt="" class="item">
        <div class="content">
            <p>Keyboard</p>
            <h2>slider 4</h2>
            <p></p>
        </div>
    </div>
    <div class="arrows">
            <button id="prev">></button>
            <button id="next">></button>
        </div>
 </div>


</div>
</template>

<script>
export default {

}
</script>

<style>
.slider{
    height: 100vh;
    margin-top: 0px;
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
}
.slider .list .item.active h2{
    animation-delay: 1s;
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
    background-color: #eee5;
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
</style>