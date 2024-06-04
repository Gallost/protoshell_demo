console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    // Reset the scroll position
    window.scrollTo(0, 0);

    // Animate based on scroll
    gsap
        .timeline({
        scrollTrigger: {
            trigger: ".wrapper",
            start: "top top",
            end: "+=150%",  // Scroll length is 1.5x the element height
            pin: true,
            scrub: true,
            // markers: true   // For debugging
        }
        })
        .to("#title-splash-wrapper", {
            scale: 130,
            z: 350,
            transformOrigin: "center center",
            ease: "power4.inOut",
        }, 0) // This is the 'offset' from which the animation will begin playing
              // Animations with the same 'offset' will begin playing simultaneously
              // Otherwise, the animations will play one after another
        .to("#title-splash-wrapper", {
            opacity: 0,
            ease: "expo.in"
        }, 0)
        .to("#circle-cutout", {
            scale: 130,
            transformOrigin: "center",
            ease: "power4.inOut",
        }, 0)
        .to("#circle-cutout", {
            opacity: 0,
            ease: "expo.in"
        }, 0)
        .to("#circle-cutout > div", {
            backgroundColor: "white",
            duration: 0.3
        }, 0)
});
