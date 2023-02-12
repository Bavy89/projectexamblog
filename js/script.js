// IMAGE SLIDE HOME PAGE

const slides = document.querySelectorAll('[data-js="carousel__item"]');
const prevBtn = document.querySelector('[data-js="carousel__button--prev"]');
const nextBtn = document.querySelector('[data-js="carousel__button--next"]');

let currentSlideItem = 0;
let lastSlideItem = slides.length - 1;

const manipulatesSlidesClasses = (slideIndex) => {
  slides.forEach((slide, i) => {
    slide.classList.remove("carousel__item--visible");
  });
  slides[slideIndex].classList.add("carousel__item--visible");
};

nextBtn.addEventListener("click", () => {
  const correctSlideIndex =
    currentSlideItem === lastSlideItem
      ? (currentSlideItem = 0)
      : ++currentSlideItem;

  manipulatesSlidesClasses(correctSlideIndex);
});

prevBtn.addEventListener("click", () => {
  const correctSlideIndex =
    currentSlideItem === 0
      ? (currentSlideItem = lastSlideItem)
      : --currentSlideItem;

  manipulatesSlidesClasses(correctSlideIndex);
});
// IMAGE SLIDE HOME PAGE

// CONTACT FORM SCRIPT VALIDATION
function validateForm() {
  var name = document.forms["contact"]["name"].value;
  var email = document.forms["contact"]["email"].value;
  var subject = document.forms["contact"]["subject"].value;
  var message = document.forms["contact"]["message"].value;

  if (name.length < 5) {
    alert("Name must be at least 5 characters long");
    return false;
  } else if (email == null || email == "") {
    alert("Please enter your e-mail");
    return false;
  } else if (subject.length < 15) {
    alert("Subject must be at least 15 characters long");
    return false;
  } else if (message.length < 25) {
    alert("Message must be at least 25 characters long");
    return false;
  }
}

// CONTACT FORM SCRIPT VALIDATION
