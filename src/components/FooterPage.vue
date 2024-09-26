<template>
  <footer id="footer" class="footer text-white text-center">
    <!-- Added 'id' to the footer -->
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
        <p class="mt-3">Contact: 067 507 0088</p>
      </section>

      <!-- Section: Social Links -->
      <section class="mb-4">
        <h5>Connect with Me</h5>
        <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/Zubayrlatief" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/zubayrlatief" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://leetcode.com/zubayrlatief" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" style="width: 20px; height: 20px;">
        </a>
        <a class="btn btn-outline-light btn-floating m-1" href="https://stackoverflow.com/users/25161660/zubi" target="_blank">
          <i class="fab fa-stack-overflow"></i>
        </a>
      </section>
    </div>

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
    async handleSubmit() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('message', this.message);

      try {
        const response = await fetch('https://formspree.io/f/xldrqegy', {
          method: 'POST',
          headers: {
            Accept: 'application/json'
          },
          body: formData
        });

        if (response.ok) {
          alert('Message sent successfully!');
        } else {
          alert('Failed to send the message. Please try again.');
        }
      } catch (error) {
        console.error('Form submit error:', error);
        alert('An error occurred. Please try again later.');
      }

      // Clear the form
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
