// unused: plan B

// const lenis = new Lenis()
// lenis.on('scroll', (e) => {
//   console.log(e)
// })

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/cal
    orientation: 'vertical',   // vertical, horizontal
    gestureOrientation: 'vertical',   // vertical, horizontal
    smoothWheel: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

// get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    console.log({ scroll, limit, velocity, direction, progress })
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
