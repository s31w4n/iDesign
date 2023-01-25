let slideIndex = 1;
let timeOutId;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  // Stop the timeout from triggering.
  clearTimeout(timeOutId);

  let slides = document.getElementsByClassName("mySlides");
  if (n == undefined) {
    n = ++slideIndex;
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  // Schedule a new timeout.
  timeOutId = setTimeout(showSlides, 2000); // Change image every 2 seconds
}
