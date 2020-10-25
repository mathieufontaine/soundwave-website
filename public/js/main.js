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

  tl.from(".call-to-action", {
    duration: 1.5,
    translateX: "100%",
    opacity: 0
  });
  tl.from(
    ".img-wrapper",
    { duration: 1.5, translateY: 100, opacity: 0 },
    "-=1"
  );
};

const discoverAnimation = () => {
  const tl = gsap.timeline();

  tl.from(".content", { duration: 1.5, translateY: 50, opacity: 0 });
  tl.from("img", { duration: 1.5, opacity: 0 }, "-=1");
};

const joinAnimation = () => {
  const tl = gsap.timeline();

  tl.from(".title", { duration: 1.5, translateY: 50, opacity: 0 });
  tl.from(
    ".form-container",
    { duration: 1.5, translateY: 50, opacity: 0 },
    "-=1"
  );
};

barba.init({
  sync: true,

  transitions: [
    {
      name: "home-transition",
      async leave() {
        const done = this.async();
        pageTransition();
        await delay(1000);
        done();
      },
      async enter() {
        homeAnimation();
      },
      async once() {
        homeAnimation();
      },
      from: {
        namespace: ["join", "discover"]
      },
      to: {
        namespace: ["home"]
      }
    },
    {
      name: "discover-transition",
      async leave() {
        const done = this.async();
        pageTransition();
        await delay(1000);
        done();
      },
      async enter() {
        discoverAnimation();
      },
      async once() {
        discoverAnimation();
      },
      from: {
        namespace: ["join", "home"]
      },
      to: {
        namespace: ["discover"]
      }
    },
    {
      name: "join-transition",
      async leave() {
        const done = this.async();
        pageTransition();
        await delay(1000);
        done();
      },
      async enter() {
        joinAnimation();
      },
      async once() {
        joinAnimation();
      },
      from: {
        namespace: ["discover", "home"]
      },
      to: {
        namespace: ["join"]
      }
    }
  ]
});

homeAnimation();
