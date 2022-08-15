export const scrollToElement = (id?: string) => {
  if (id) {
    const element = document.querySelector("#" + id);

    if (element) {
      const offset = -120; // px (top-bar + spacing)
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + offset;

      window.scrollTo({
        top: y,
        left: 0,
        behavior: "smooth",
      });
    }
  } else {
    // scrollToTop
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
};
