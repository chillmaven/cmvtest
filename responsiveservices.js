let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.opacity = 0;
  }

  // Remove 'active' class from dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.opacity = 1;

  // Add 'active' class to current dot
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }
}


// Add event listener to toggle button
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});





function toggleDropdown() {
  document.getElementById('dropdownContent').classList.toggle('show');
}

// Close dropdown when clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementById('dropdownContent');
    if (dropdowns.classList.contains('show')) {
      dropdowns.classList.remove('show');
    }
  }
};

function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdownContent");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
}

// Optional: Close dropdown if clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].style.display === "block") {
        dropdowns[i].style.display = "none";
      }
    }
  }
}



