import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";


//Scroll progress bar animation

const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: 'block',
});

scrollTracker.animate(
  {
    transform: ['scalex(0)', 'scaleX(1)']
  },
  {
    timeline: scrollTrackingTimeline,
  }
);


//Rotation animation for background image - configured to be applied to any element with class .rotate-in-y

const rotateInElementsY = document.querySelectorAll('.rotate-in-y');

rotateInElementsY.forEach((element) => {
  const rotateInYTimeline = new ScrollTimeline({
    scrollOffsets: [
      { target: element, edge: 'end', threshold: "1"},
      { target: element, edge: 'start', threshold: "1"}
    ],
  });

  element.animate(
    {
      transform: ['perspective(1000px) rotateY(360deg)', 'perspective(10000px) rotate(0)']
    },
    {
      timeline: rotateInYTimeline,
    }
  );
});


