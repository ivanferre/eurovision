console.log("Defining lenis...")

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 2,
});

console.log("lenis defined!")

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

console.log("Requesting Animation Frame...")

requestAnimationFrame(raf);

console.log("This works!")
