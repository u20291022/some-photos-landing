// background lights
const light1 = document.getElementById("light-1");
const light2 = document.getElementById("light-2");
const light3 = document.getElementById("light-3");
const light4 = document.getElementById("light-4");

function animate() {
  light1.animate([
    { right: "0", top: "0" },
    { right: "30%" },
    { right: "10%", top: "10%" },
    { right: "0", top: "0" }
  ], {
    duration: 6000,
    iterations: Infinity
  })

  light2.animate([
    { top: "30%", left: "0" },
    { top: "40%", left: "60%" },
    { top: "50%", left: "40%" },
    { top: "30%", left: "0" }
  ], {
    duration: 6000,
    iterations: Infinity
  })

  light3.animate([
    { top: "110%", right: "0" },
    { top: "100%", right: "40%" },
    { top: "140%", right: "70%" },
    { top: "110%", right: "0" }
  ], {
    duration: 6000,
    iterations: Infinity
  })

  light4.animate([
    { top: "190%", left: "25%" },
    { top: "150%", left: "20%" },
    { top: "180%", left: "60%" },
    { top: "190%", left: "25%" }
  ], {
    duration: 6000,
    iterations: Infinity
  })
}

animate(); // start lights movement animations

// slider //
// works only for 3+ slides
// for other porposes use collage(2) or photo(1)

const arrowLeftButton = document.getElementsByClassName("arrow-left")[0];
const arrowRightButton = document.getElementsByClassName("arrow-right")[0];
const photosSlider = document.getElementsByClassName("photos-slider")[0];
const slides = photosSlider.getElementsByClassName("slide");
const slidesCount = slides.length;

let slideIndex = 0;

function setSlideAsActive() {
  const nextSlideIndex = (slideIndex + 1) % slidesCount;
  const previousSlideIndex = (slideIndex - 1 + slidesCount) % slidesCount;

  slides.item(slideIndex).id = "active-slide";
  slides.item(nextSlideIndex).id = "next-slide";
  slides.item(previousSlideIndex).id = "previous-slide";
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slidesCount;
  setSlideAsActive();
}

function previousSlide() {
  slideIndex = (slideIndex - 1 + slidesCount) % slidesCount;
  setSlideAsActive();
}

arrowLeftButton.addEventListener("click", previousSlide);
arrowRightButton.addEventListener("click", nextSlide);

setSlideAsActive(); // sets first slide as active on page load 