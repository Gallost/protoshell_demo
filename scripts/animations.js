console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    gsap
        .timeline({
        scrollTrigger: {
            trigger: ".wrapper",
            start: "top top",
            end: "+=80%",
            pin: true,
            scrub: true,
            // markers: true
        }
        })
        .to("#title-splash-wrapper", {
            scale: 2,
            z: 350,
            transformOrigin: "center center",
            ease: "power1.inOut",
            opacity: 0
        }, 0)
        .to(".content section", {
            opacity: 1
        }, 0.2)
});
