function updateCountdown() {
  const weddingDate = new Date("2024-12-24T23:59:59"); // Midnight of December 24
  const currentDate = new Date();
  const timeDiff = weddingDate - currentDate;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById(
    "timer"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update every second
setInterval(updateCountdown, 1000);

// Show events with animation
window.addEventListener("scroll", () => {
  const events = document.querySelectorAll(".event");
  const reasons = document.querySelectorAll("#reasonsILoveYou li");

  events.forEach((event) => {
    const eventPosition = event.getBoundingClientRect().top;
    if (eventPosition < window.innerHeight - 100) {
      event.classList.add("visible");
    }
  });

  reasons.forEach((reason) => {
    const reasonPosition = reason.getBoundingClientRect().top;
    if (reasonPosition < window.innerHeight - 100) {
      reason.classList.add("visible");
    }
  });

  // Show events with animation as the user scrolls
  window.addEventListener("scroll", () => {
    const events = document.querySelectorAll(".first-event");

    events.forEach((event) => {
      const eventPosition = event.getBoundingClientRect().top;
      if (eventPosition < window.innerHeight - 100) {
        event.classList.add("visible");
      }
    });
  });
});

let currentSlide = 0;
const slides = document.querySelectorAll("#imageSlider .slider img");

function moveSlider() {
  // Hide all images
  slides.forEach((slide) => {
    slide.classList.remove("visible");
  });

  // Show the current slide
  slides[currentSlide].classList.add("visible");

  // Move to the next slide, loop back when at the last one
  currentSlide = (currentSlide + 1) % slides.length;
}

// Set interval to change the slide every 3 seconds
setInterval(moveSlider, 1500);

let currentSlideTwo = 0;
const slidesTwo = document.querySelectorAll("#imageSliderTwo .sliderTwo img");

// The correct pin
const correctPin = "102424";

// Clear the pin input field when the page is loaded or the browser is closed
window.onload = () => {
  // Clear the pin input field
  document.getElementById("pinInput").value = "";
  // Hide error message initially
  document.getElementById("errorMessage").style.display = "none";

  // Disable right-click context menu
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  // Disable F12 key (DevTools)
  document.addEventListener("keydown", (e) => {
    // Disable F12
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
      e.preventDefault();
    }

    // Disable the context menu opening using right-click (or F12)
    if (e.ctrlKey && (e.key === "U" || e.key === "S" || e.key === "C")) {
      e.preventDefault();
    }
  });
};

// Listen to changes on the pin input to clear errors as the user types
document.getElementById("pinInput").addEventListener("input", function () {
  document.getElementById("errorMessage").style.display = "none"; // Hide error on input
});

function checkPin() {
  const enteredPin = document.getElementById("pinInput").value;

  // Ensure the entered pin is numeric and 6 digits long
  if (!/^\d{6}$/.test(enteredPin)) {
    document.getElementById("errorMessage").style.display = "block";
    document.getElementById("errorMessage").textContent =
      "Please enter a valid 6-digit pin.";
    return;
  }

  // If the pin is correct
  if (enteredPin === correctPin) {
    // Hide the pin input and show the slider
    document.getElementById("pinProtection").style.display = "none";
    document.querySelector(".sliderTwo").style.display = "block";

    // Hide the original "Enter Pin" header and show the "Surprised?" message
    document.getElementById("pinHeader").style.display = "none";
    document.getElementById("surpriseMessage").style.display = "block";
  } else {
    // Show error message if the pin is incorrect
    document.getElementById("errorMessage").style.display = "block";
    document.getElementById("pinInput").value = "";
    document.getElementById("errorMessage").textContent =
      "Incorrect Pin. Please try again.";
  }
}

// Function to move the slider
function moveSliderTwo() {
  slidesTwo.forEach((slideTwo) => {
    slideTwo.classList.remove("visible");
  });

  slidesTwo[currentSlideTwo].classList.add("visible");

  currentSlideTwo = (currentSlideTwo + 1) % slidesTwo.length;
}

// Automatically move slides every 1.5 seconds
setInterval(moveSliderTwo, 1500);
