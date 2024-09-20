<template>
  <footer class="footer text-white text-center">
    <div class="container p-4">
      <!-- Section: Contact Form -->
      <section class="mb-4">
        <h5>Contact Me</h5>
        <form @submit.prevent="handleSubmit">
          <div class="row d-flex justify-content-center">
            <div class="col-md-6 col-12 mb-3">
              <input
                type="text"
                v-model="name"
                class="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="col-md-6 col-12 mb-3">
              <input
                type="email"
                v-model="email"
                class="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div class="col-12 mb-3">
              <textarea
                v-model="message"
                class="form-control"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-outline-light mb-4">
                Send
              </button>
            </div>
          </div>
        </form>
        <!-- Phone Number -->
        <p class="mt-3">Contact: 067 507 0088</p>
      </section>
      <!-- Section: Contact Form -->

      <!-- Section: Social Links -->
      <section class="mb-4">
        <h5>Connect with Me</h5>
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/yourusername" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://linkedin.com/in/yourusername" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://leetcode.com/yourusername" target="_blank">
          <i class="fab fa-leetcode"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://stackoverflow.com/users/youruserid" target="_blank">
          <i class="fab fa-stack-overflow"></i>
        </a>
      </section>
      <!-- Section: Social Links -->
    </div>

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © {{ new Date().getFullYear() }} Zubayr Abdullatief
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', {
        name: this.name,
        email: this.email,
        message: this.message
      });
      // Here you can add your form submission logic, like sending the data to your backend
      // Reset the form after submission
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
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
</style>
