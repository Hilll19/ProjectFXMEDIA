document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const imgdropdown = document.getElementById("imgdropdown");
  let prevScrollpos = window.pageYOffset;

  navbar.style.top = "-150px";

  window.onscroll = function () {
    const currentScrollpos = window.pageYOffset;

    if (currentScrollpos <= 25) {
      navbar.style.top = "-150px";
      imgdropdown.style.display = "block";
    } else if (prevScrollpos > currentScrollpos) {
      navbar.style.top = "0";
      imgdropdown.style.display = "none";
    } else {
      navbar.style.top = "0";
      imgdropdown.style.display = "none";
    }

    prevScrollpos = currentScrollpos;
  };

  const carousel = document.getElementById("carouselExampleCaptions");
  const slideInterval = 5000; // Slide interval in milliseconds
  let slideIntervalId;

  function startSlideInterval() {
    slideIntervalId = setInterval(autoSlide, slideInterval);
  }

  function stopSlideInterval() {
    clearInterval(slideIntervalId);
  }

  function autoSlide() {
    const indicators = document.querySelectorAll(".carousel-indicators button");
    const activeSlide = carousel.querySelector(".carousel-item.active");
    const activeIndex = Array.from(
      carousel.querySelectorAll(".carousel-item")
    ).indexOf(activeSlide);

    // Remove active class from the current slide
    activeSlide.classList.remove("active");
    indicators[activeIndex].classList.remove("active");

    let nextIndex = activeIndex + 1;

    if (nextIndex >= indicators.length) {
      // Reset to the first slide after reaching the last slide
      nextIndex = 0;
    }

    // Add active class to the next slide
    carousel
      .querySelectorAll(".carousel-item")
      [nextIndex].classList.add("active");
    indicators[nextIndex].classList.add("active");
  }

  startSlideInterval();

  // Pause the interval when the user interacts with the carousel
  carousel.addEventListener("mouseenter", () => {
    stopSlideInterval();
  });

  // Resume the interval when the user stops interacting with the carousel
  carousel.addEventListener("mouseleave", () => {
    startSlideInterval();
  });

  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const containerEvent = this.parentElement;
      const eventText = containerEvent.querySelector(".event-text");

      const hiddenContent = document.getElementById("hiddenContent1"); // Ganti dengan ID yang sesuai

      eventText.classList.toggle("hiddenContent1");

      if (eventText.classList.contains("hiddenContent1")) {
        this.textContent = "Read Less -";
        hiddenContent.style.display = "block"; // Tampilkan konten tersembunyi
      } else {
        this.textContent = "Read More +";
        hiddenContent.style.display = "none"; // Sembunyikan konten tersembunyi
      }
    });
  });
  const inputBox = document.querySelector(".input-box");
  const searchIcon = document.querySelector(".search-icon");
  const closeIcon = document.querySelector(".close-icon");
  const searchInput = document.getElementById("search-input");

  inputBox.style.display = "none";
  closeIcon.style.display = "none";

  searchIcon.addEventListener("click", () => {
    inputBox.classList.add("open");
    searchIcon.style.display = "none";
    inputBox.style.display = "block";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", () => {
    inputBox.classList.remove("open");
    inputBox.style.display = "none";
    searchIcon.style.display = "block";
  });

  // Close the search box when clicking outside of it
  document.addEventListener("click", (event) => {
    if (!inputBox.contains(event.target) && event.target !== searchInput) {
      inputBox.classList.remove("open");
      searchInput.value = ""; // Clear the input when closing
      searchIcon.style.display = "block";
    }
  });
});
