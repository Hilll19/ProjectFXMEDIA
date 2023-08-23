document.addEventListener("DOMContentLoaded", function () {
  // Main Navbar logic, when scrolling show navbar and when scroll top 0  navbar hidden
  // Navbar dropsown logic, when scrolling hidden and when scroll top 0 show
  const navbar = document.getElementById("navbar");
  const imgdropdown = document.getElementById("imgdropdown");
  let prevScrollpos = window.pageYOffset;

  //Main navbar will be hidden when code run for first time
  navbar.style.top = "-150px";

  window.onscroll = function () {
    const currentScrollpos = window.pageYOffset;

    if (currentScrollpos <= 25) {
      //hidden Main Navbar out from layer -150px
      navbar.style.top = "-150px";
      //Navbar dropdown will show
      imgdropdown.style.display = "block";
    } else if (prevScrollpos > currentScrollpos) {
      //When scrolling to down, will show Main Navbar
      navbar.style.top = "0";
      //Navbar dropdown hidden
      imgdropdown.style.display = "none";
    } else {
      //showing back Main Navbar
      navbar.style.top = "0";
      //Hidden navbar dropdown
      imgdropdown.style.display = "none";
    }

    //saving posisition to current possition
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

      const hiddenContent = document.getElementById("hiddenContent1");

      eventText.classList.toggle("hiddenContent1");

      if (eventText.classList.contains("hiddenContent1")) {
        this.textContent = "Read Less -";
        // Showing hidden content event, and the button will change to read less-
        hiddenContent.style.display = "block";
      } else {
        // Hidden again content event hidden, and the button will change to read less+
        this.textContent = "Read More +";
        hiddenContent.style.display = "none";
      }
    });
  });
  const inputBox = document.querySelector(".input-box");
  const searchIcon = document.querySelector(".search-icon");
  const closeIcon = document.querySelector(".close-icon");
  const searchInput = document.getElementById("search-input");

  //First posisition
  inputBox.style.display = "none";
  closeIcon.style.display = "none";

  //when click icon searchIcon
  searchIcon.addEventListener("click", () => {
    inputBox.classList.add("open");
    //searchIcon will hidden
    searchIcon.style.display = "none";
    //Showing input box and closeIcon
    inputBox.style.display = "block";
    closeIcon.style.display = "block";
  });
  //When click icon searchIcon
  closeIcon.addEventListener("click", () => {
    inputBox.classList.remove("open");
    //inputBox hidden
    inputBox.style.display = "none";
    //searchIcon will show again
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
