// IMAGE SLIDE HOME PAGE

let slideIndex = 1;
if (window.location.pathname === "/index.html") {
  showSlides(slideIndex);
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
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
