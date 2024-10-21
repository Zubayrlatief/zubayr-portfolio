<template>
  <footer id="footer" class="footer text-white text-center">
    <div class="container p-4">
      <div class="row">
        <div class="col-md-6 mb-4">
          <h5>Contact Me</h5>
          <form @submit.prevent="handleSubmit">
            <div class="row d-flex justify-content-center">
              <div class="col-12 mb-3">
                <input type="text" v-model="name" class="form-control" placeholder="Your Name" required />
              </div>
              <div class="col-12 mb-3">
                <input type="email" v-model="email" class="form-control" placeholder="Your Email" required />
              </div>
              <div class="col-12 mb-3">
                <textarea v-model="message" class="form-control" rows="4" placeholder="Your Message"
                  required></textarea>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-outline-light mb-4">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>

        <div class="col-md-6 mb-4">
          <h5>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 3.75 7 11 7 11s7-7.25 7-11c0-3.87-3.13-7-7-7zm0 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </svg>
            Location
          </h5>
          <p><img class="flag"
              src="https://raw.githubusercontent.com/HatScripts/circle-flags/6452fa836a38e8e46b0d1833d3e83dbcef194d6b/flags/za.svg">
          </p>
          <p style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.8)">
            Cape Town, Crawford
          </p>
          <h2 class="mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-phone">
              <path
                d="M22 16.92V21a1 1 0 0 1-1 1h-4.08a1 1 0 0 1-.92-.65l-1.74-5.21a1 1 0 0 1 .16-1.05l2.57-2.57a1 1 0 0 1 1.07-.23l3.92 1.96a1 1 0 0 1 .61 1.12zM2 4a1 1 0 0 1 1-1h4.08a1 1 0 0 1 .92.65l1.74 5.21a1 1 0 0 1-.16 1.05l-2.57 2.57a1 1 0 0 1-1.07.23l-3.92-1.96a1 1 0 0 1-.61-1.12z">
              </path>
            </svg>
            067 507 0088
          </h2>
          <h3>
            <a href="mailto:zubayrlatie007@gmail.com">
              <i class="bi bi-envelope-fill"></i>
            </a>
            zubayrlatie007@gmail.com
          </h3>
        </div>
      </div>

      <section class="mb-4">
        <h5>Connect with Me</h5>
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Zubayrlatief" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/zubayrlatief"
          target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://leetcode.com/zubayrlatief" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode"
            style="width: 20px; height: 20px" />
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://stackoverflow.com/users/25161660/zubi"
          target="_blank">
          <i class="fab fa-stack-overflow"></i>
        </a>
      </section>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © {{ new Date().getFullYear() }} Zubayr Abdullatief
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("message", this.message);

      try {
        const response = await fetch("https://formspree.io/f/xldrqegy", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });

        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("Failed to send the message. Please try again.");
        }
      } catch (error) {
        console.error("Form submit error:", error);
        alert("An error occurred. Please try again later.");
      }

      // Clear the form
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: black;
}

.location-info {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.flag {
  height: 10vh;

}

a {
  color: white;
}

a:hover {
  color: grey;
}
</style>
