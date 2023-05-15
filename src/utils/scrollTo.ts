export const scrollToElement = (id?: string, mobile?: boolean) => {
  if (id) {
    const element = document.querySelector("#" + id);

    if (element) {
      let offset = mobile ? -78 : -120; // px (top-bar + spacing)
      if (mobile) offset -= window.innerHeight;
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset;

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
