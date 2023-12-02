export const scrollToActiveElement = (index) => {
  const el = document.getElementById(index);

  if (el) return el.scrollIntoView({ behavior: "smooth" });
};

export const showElementOnScroll = (show) => {
  const y = window.scrollY;
  if (y > 120) {
    show.value = true;
  } else {
    show.value = false;
  }
};
