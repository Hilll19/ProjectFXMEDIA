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
  let activeSlideIndex = 0;

  // Function to change the active slide
  function changeSlide(index) {
    const indicators = document.querySelectorAll(".carousel-indicators button");
    indicators[activeSlideIndex].classList.remove("active");
    carousel.querySelector(".carousel-item.active").classList.remove("active");

    activeSlideIndex = index;

    if (activeSlideIndex === slideImages.length - 3) {
      // Reset to the first slide after reaching the last slide
      activeSlideIndex = 0;
    }

    indicators[activeSlideIndex].classList.add("active");
    carousel
      .querySelectorAll(".carousel-item")
      [activeSlideIndex].classList.add("active");
  }

  const slideImages = document.querySelectorAll(".carousel-item img");
  slideImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      changeSlide(index === slideImages.length - 3 ? 0 : index + 1);
    });
  });

  // // Automatic slide transition every 6 seconds
  // setInterval(() => {
  //   changeSlide(activeSlideIndex + 1); // No need to handle wrapping here
  // }, 6000); // Change the interval to 6000 milliseconds (6 seconds)

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
});
