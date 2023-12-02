import { onUnmounted, ref } from "vue";
export const useMedia = () => {
  const isMobile = ref(window.innerWidth <= 767); // Adjust the breakpoint as needed

  // Listen for window resize to update isMobile
  window.addEventListener(
    "resize",
    () => (isMobile.value = window.innerWidth <= 767) // Adjust the breakpoint as needed
  );

  // Remove the resize event listener when the component is unmounted
  onUnmounted(() => window.removeEventListener("resize", () => {}));

  return { isMobile };
};
