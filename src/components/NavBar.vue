<template>
<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid justify-content-center">
    <a class="navbar-brand" href="#"><img  class="img" src="https://zubayrlatief.github.io/portfolio-hosted-images/ZAlogo.png"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">What im good at</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>
<style scoped>
/* Apply Poppins Font to Navbar */
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');

.navbar {
  font-family: 'Poppins', sans-serif;
  background-color: black;
}

.img{
  height: 65px;
  width: 75px;
}

.nav-link {
  color: #5f5757;
  font-weight: 400;
  margin: 20px;
}

.nav-link.active {
  font-weight: 600;
}
</style>
