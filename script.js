// Glow Touch Salon JS 🌸

document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for navigation buttons
  const buttons = document.querySelectorAll('a[href^="#"]');

  buttons.forEach(button => {
    button.addEventListener("click", (event) => {

      const targetId = button.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });
  });

});
