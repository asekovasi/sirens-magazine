const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries, io) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      io.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const subscribeForm = document.querySelector(".subscribe-form");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = subscribeForm.querySelector("button");
    if (button) {
      const originalText = button.textContent;
      button.textContent = "Спасибо!";
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        subscribeForm.reset();
      }, 1400);
    }
  });
}
