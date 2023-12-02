<template>
  <section class="card-section container" ref="wrapper">
    <div class="row gx-sm-5">
      <transition-group name="flip-list">
        <div
          v-for="(section, index) in sections"
          :ref="index + 1"
          :id="index"
          :key="index"
          class="col-12 col-md-6 col-lg-4 mb-5"
        >
          <div class="card h-100 text-center align-items-center p-3">
            <img
              class="card-img-top"
              :src="require('@/assets/images/content-image.png')"
              alt="Card image cap"
            />
            <template v-if="isMobile">
              <p
                v-if="activeIndex === index"
                class="card-body"
                v-html="section.content"
              ></p>
            </template>
            <p v-else class="card-body" v-html="section.content"></p>
            <button
              @click="toggleAccordion(index)"
              type="button"
              :class="{ 'mt-3': activeIndex !== index }"
              class="btn inline-block btn-outline-dark rounded-pill border-2 text-uppercase fw-bold mb-1"
            >
              Read More
            </button>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import { scrollToActiveElement } from "@/utils/scroll";
import { useMedia } from "@/composables/useMedia";

defineProps(["sections"]);

const wrapper = ref(null);

defineExpose({ wrapper });

const activeIndex = ref(0);

const { isMobile } = useMedia();

const toggleAccordion = (index) => {
  if (!isMobile) return;

  // Set active element on toggle
  activeIndex.value = activeIndex.value === index ? null : index;

  // Scroll to active element on toggle
  scrollToActiveElement(activeIndex.value);
};
</script>

<style scoped lang="scss">
/* Add specific styles for the card section */
.btn {
  letter-spacing: 0.15rem;
}
</style>
