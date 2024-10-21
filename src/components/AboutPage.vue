<template>
    <section id="about" class="about">
      <div class="main">
        <img src="https://zubayrlatief.github.io/hosted-images/myportfolioimg.jpg" alt="Profile Image" class="fade-in">
        <div class="about-text">
          <h1 class="fade-in" ><span class="dev">ZUBAYR ABDULLATIEF</span></h1>
          <h5 class="fade-in"><span class="dev"> Aspiring Full stackDeveloper</span></h5>
          <p class="fade-in">
            Providingsolutions in the front and backend of your company.<br>
            Entering the world of software is exciting<br>
             Ammple of knowledge to gain and limitless ceilings to reach.<br>
             Obsessed and PassionateI want to learn everything about it.<br>
              Keeping disciplined and healthy is a must for me; I work out 5 times a week.<br>
               I enjoy surfing and gaining knowledge in every aspect possible.
          </p>
          <button type="button" @click="scrollToFooter">Get in touch</button>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    methods: {
      scrollToFooter() {
        const footer = document.getElementById("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }
  </script>
  
  <style scoped>
.about {
    width: 100%;
    padding: 78px 0;
    background-color: black;
}

.dev{
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

/* Fade-in animation for the image */
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
    font-size: 1.5rem;
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
    color: antiquewhite;
}

.about-text p {
    color: bisque;
    letter-spacing: 2px;
    line-height: 1.6;
    font-size: 1rem;
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

/* Media Queries for iPhone 14 Pro Max and similar devices */

@media (max-width: 430px) {
    .main {
        flex-direction: row; /* Ensure side-by-side on small screens */
        justify-content: space-between;
        align-items: center; /* Vertically center the items */
    }

    .about img {
        max-width: 40%; /* Scale image size */
        margin: 0 10px 0 0;
    }

    .about-text {
        max-width: 55%;
        text-align: left;
    }

    .about-text h1 {
        font-size: 1.8rem; /* Adjust text size */
    }

    .about-text h5 {
        font-size: 1.2rem;
    }

    .about-text p {
        font-size: 0.85rem;
    }

    button {
        font-size: 0.85rem;
        padding: 10px 25px;
    }
}

/* Additional Media Queries for general responsiveness */

@media (max-width: 768px) {
    .main {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }

    .about img {
        width: 60%;
    }

    .about-text {
        max-width: 50%;
        text-align: left;
    }

    .about-text h1 {
        font-size: 2rem;
    }

    .about-text h5 {
        font-size: 1.2rem;
    }

    .about-text p {
        font-size: 0.9rem;
    }
}

@media (max-width: 576px) {
    .about {
        padding: 50px 0;
    }

    .main {
        flex-direction: column; /* Stack for small screens */
        align-items: center;
    }

    .about img {
        max-width: 100%;
        margin: 0 0 20px 0;
    }

    .about-text {
        text-align: center;
    }

    .about-text h1 {
        font-size: 1.5rem;
    }

    .about-text h5 {
        font-size: 1rem;
    }

    .about-text p {
        font-size: 0.8rem;
    }

    button {
        font-size: 0.9rem;
        padding: 10px 20px;
    }
}

  </style>
  