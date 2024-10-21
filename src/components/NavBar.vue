<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid justify-content-center">
      <a class="navbar-brand" href="#">
        <img class="img" src="https://zubayrlatief.github.io/Images-/ZAlogo.png" alt="Logo">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#about">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Education">Education & Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#home">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');

.navbar {
  font-family: 'Poppins', sans-serif;
  background-color: transparent;
}

.img {
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

.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1030;
}
</style>
