const pageTransition = () => {
  const tl = gsap.timeline();

  tl.to("ul.transition li", {
    duration: 0.4,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: 0.1
  });
  tl.to("ul.transition li", {
    duration: 0.3,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.05
  });
};

function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

const homeAnimation = () => {
  let tl = gsap.timeline();
  tl.fromTo(
    ".call-to-action",
    {
      duration: 1.5,
      translateX: "100%",
      opacity: 0
    },
    {
      duration: 1.5,
      translateX: 0,
      opacity: 1
    }
  );
  tl.fromTo(
    ".img-wrapper",
    { duration: 1.5, translateY: 100, opacity: 0 },
    {
      duration: 1.5,
      translateY: 0,
      opacity: 1
    },
    "-=1"
  );
};

// const logo = document.querySelector(".brand-logo");

// logo.addEventListener("click", () => {
//   homeAnimation();
// });

barba.init({
  sync: true,

  transitions: [
    {
      async leave() {
        const done = this.async();
        pageTransition();
        await delay(1000);
        done();
      }
    }
  ]
});

homeAnimation();
