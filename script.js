const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));


const car = document.querySelector(".car");
const carSection = document.querySelector(".car-wrapper");

window.addEventListener("scroll", () => {
  const rect = carSection.getBoundingClientRect();

  const screenHeight = window.innerHeight;

  // Only animate when section is visible
  if (rect.top < screenHeight && rect.bottom > 0) {

    const progress = 1 - rect.top / screenHeight;

    const maxMove = window.innerWidth * 0.6;

    const moveX = Math.max(0, Math.min(progress * maxMove, maxMove));

    car.style.transform = `translateX(${moveX}px)`;
  }
});