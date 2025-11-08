const h3Tags = document.querySelectorAll(".arrows h3");
const txtContainer = document.querySelector(".txt-container,.service5link");
let blinkTimeline;

txtContainer.addEventListener("mouseenter", () => {
  // Create a timeline that loops infinitely
  blinkTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });

  h3Tags.forEach((h3, i) => {
    blinkTimeline.to(h3, {
      color: "#eeff00ff",             
      duration: 0.1,             
    
   
      ease: "none",
    });
    blinkTimeline.to(h3, {
      color: "#ffc800ff",
      duration: 0.1,
      ease: "none",
    });
  });
});

txtContainer.addEventListener("mouseleave", () => {
  if (blinkTimeline) blinkTimeline.kill();
  gsap.to(h3Tags, {
    color: "#000",

    duration: 0.1
  });
});
