var sliderPositions = {
    "marketing_slider": 1,
    "design_slider": 1,
    "beauty_slider": 1,
    "education_slider": 1,
    "culture_slider": 1
};

Object.keys(sliderPositions).forEach(function (el) {
  showSlides(sliderPositions[el], el);
});


function plusSlides(n, sliderName) {
  showSlides((sliderPositions[sliderName] += n), sliderName);
}

function currentSlide(n, sliderName) {
  showSlides((sliderPositions[sliderName] = n), sliderName);
}

function showSlides(n, sliderName) {
  var slideshowContainer = document.getElementById(
    sliderName
  );
    var slides = slideshowContainer.querySelectorAll(".slides");
    var i;
    var number = document.getElementById(sliderName + '_controls').querySelectorAll(".number");
    if (n > slides.length) {
      sliderPositions[sliderName] = 1;
    }
    if (n < 1) {
      sliderPositions[sliderName] = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < number.length; i++) {
      number[i].className = number[i].className.replace(" current", "");
    }
    slides[sliderPositions[sliderName] - 1].style.display = "block";
    number[sliderPositions[sliderName] - 1].className += " current";
  }