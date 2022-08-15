export const scrollToElement = (id?: string) => {
  if (id) {
    const el = document.querySelector("#" + id);

    if (el) {
      el.scrollIntoView({
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
