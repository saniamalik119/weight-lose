gsap.registerPlugin(ScrollTrigger);

const fadeIns = gsap.utils.toArray('.panel');

fadeIns.forEach(fadeIn => {
    gsap.to(fadeIn, {
      scale: 1,
      start: "top 120%",
      duration: 1,
      scrollTrigger: {
        trigger: fadeIn,
        scrub: true,
        toggleActions: 'play none none reset'
      }
    });
  });



var slides = gsap.utils.toArray('.slide');
var slideWidth = slides[0].offsetWidth;

gsap.set('.slides', {
  x: -slideWidth // position the slides offscreen to the left
});

gsap.to('.slides', {
  duration: 10,
  x: '+=' + slideWidth, // move the slides to the right
  ease: 'none',
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % slideWidth - slideWidth) // wrap the slides around when they reach the end
  },
  repeat: -1,
  repeatRefresh: true // ensure the animation always starts from the same position
});

