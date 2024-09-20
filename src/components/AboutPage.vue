<template>
    <section class="about">
      <div class="main">
        <img src="https://zubayrlatief.github.io/hosted-images/myportfolioimg.jpg" alt="Profile Image" class="fade-in-image">
        <div class="about-text">
          <h1>Zubayr Abdullatief</h1>
          <h5>Aspiring Fullstack<span>Developer</span></h5>
          <p>Providing Ecommerce solutions in the front and backend of your company.<br>
          Entering the world of software is exciting, a lot of knowledge to gain and limitless ceilings to reach. The possibilities are endless. I am a rounded person taking interest in a few passions. Being obsessive when I become passionate about something, I want to learn everything about it. Keeping disciplined and healthy is a must for me; I work out 5 times a week. I enjoy surfing and gaining knowledge in every aspect possible.</p>
          <button type="button" href="contact">Get in touch</button>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .about {
      width: 100%;
      padding: 78px 0;
      background-color: black;
  }
  
  .main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap; 
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
  }
  
  /* Fade-in animation for the image */
  .fade-in-image {
      opacity: 0;
      animation: fadeIn 6s ease-in forwards;
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
      font-size: 2.5rem;
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
      color: white;
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
  
  /* Media Queries for Responsiveness */
  
  @media (max-width: 768px) {
      .main {
          flex-direction: column;
          align-items: center;
      }
  
      .about img {
          margin: 0 0 20px 0;
          max-width: 100%;
      }
  
      .about-text {
          width: 90%;
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
  
      .about img {
          max-width: 100%;
          margin: 0 0 20px 0;
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
  