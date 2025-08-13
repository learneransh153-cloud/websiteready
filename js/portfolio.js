document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let index = 0;
  const itemWidth = items[0].offsetWidth + 30; // width + margin

  function updateCarousel() {
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % items.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
  });

  // Auto Slide
  setInterval(() => {
    index = (index + 1) % items.length;
    updateCarousel();
  }, 3000);
});
