// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".switch-btn")
const video = document.querySelector(".video-container")
// listen for the click function
btn.addEventListener("click", function () {
  //add the slide class if not there to pause
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide")
    video.pause()
    //remove the slide class once added to play
  } else {
    btn.classList.remove("slide")
    video.play()
  }
})
//preloader
const preloader = document.querySelector(".preloader")

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader")
})
