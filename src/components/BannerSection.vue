<template>
  <section
    class="banner-section position-relative d-flex justify-content-center align-items-center"
  >
    <div class="banner-overlay position-absolute h-100 w-100 z-1"></div>
    <div class="banner-section-content text-white text-center z-2 py-4">
      <h1 class="fw-bold">
        Hello <span class="d-block d-sm-none mb-2" />
        Developer!
      </h1>
      <p class="lead">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
  </section>
</template>

<script setup>
// Your script logic here
</script>

<style scoped lang="scss">
/* Add specific styles for the banner section */
.banner-section {
  background: url("@/assets/images/banner-desktop.png") center center/cover
    no-repeat;
  margin-bottom: 2.32rem;
  min-height: 375px;
  letter-spacing: 0.1rem;
  padding: 2rem 1rem;
  min-height: 90vh;

  @media (min-width: 576px) {
    min-height: auto;
  }

  .banner-overlay {
    content: "";
    background-color: #8f8f8f;
    background: url("@/assets/images/banner-overlay.svg") center center/contain
      no-repeat;
    opacity: 0.7;
  }

  @media (max-width: 575px) {
    h1 {
      font-size: 2.065rem;
    }

    .lead {
      font-size: 1;
    }
  }

  @media (min-width: 576px) {
    padding: 4rem 2rem;
    min-height: 600px;
  }

  @media (min-width: 768px) {
    min-height: 650px;
  }
}
</style>
