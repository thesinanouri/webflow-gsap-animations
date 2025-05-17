document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Select all elements that have the "data-gsap" attribute
    document.querySelectorAll("[data-gsap]").forEach((el) => {
        const animationType = el.getAttribute("data-gsap");

        switch (animationType) {
            case "fade-in":
                gsap.from(el, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });
                break;

            case "slide-left":
                gsap.from(el, {
                    x: 120,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });
                break;

            case "scale-up":
                gsap.from(el, {
                    scale: 0.5,
                    opacity: 0,
                    duration: 1,
                    ease: "elastic.out(1, 0.5)",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });
                break;

            default:
                console.warn(`No animation found for ${animationType}`);
        }
    });
});
