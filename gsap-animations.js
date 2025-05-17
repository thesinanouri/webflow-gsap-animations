document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-gsap]").forEach((el) => {
    const type = el.getAttribute("data-gsap");

    switch (type) {
      case "fade-in":
        gsap.from(el, { opacity: 0, duration: 1 });
        break;

      case "slide-up":
        gsap.from(el, { y: 100, opacity: 0, duration: 1 });
        break;

      default:
        console.warn(`No GSAP animation defined for "${type}"`);
    }
  });
});
