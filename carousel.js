document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const toggleBtn = document.getElementById('carousel-toggle');
  let currentSlide = 0;
  let isPlaying = true;
  let intervalId;

  function showSlide(n) {
    if (slides.length === 0) return;
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function playCarousel() {
    intervalId = setInterval(nextSlide, 10000);
    if (toggleBtn) {
      toggleBtn.style.backgroundImage = 'url(images/icon-pause.svg)';
    }
    isPlaying = true;
  }

  function pauseCarousel() {
    clearInterval(intervalId);
    if (toggleBtn) {
      toggleBtn.style.backgroundImage = 'url(images/icon-play.svg)';
    }
    isPlaying = false;
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (isPlaying) {
        pauseCarousel();
      } else {
        playCarousel();
      }
    });
  }

  if (slides.length > 0) {
    showSlide(currentSlide);
    playCarousel();
  }
});