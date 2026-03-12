// Enhancements for the landing page (beginner-friendly and easy to modify)
// - Fades the page in smoothly
// - Adds a simple typewriter effect for the main heading
// - Keeps the footer year up to date
// - Gently animates the accent color over time

document.addEventListener("DOMContentLoaded", () => {
  // Make the page fade in using the CSS transition defined in index.css
  document.documentElement.classList.add("page-is-visible");

  // Typewriter effect for the welcome heading
  const welcomeHeading = document.querySelector("#welcome h1");
  if (welcomeHeading) {
    const fullText = welcomeHeading.textContent.trim();
    welcomeHeading.textContent = "";

    let index = 0;
    const typeSpeed = 35;

    const typeNext = () => {
      if (index < fullText.length) {
        welcomeHeading.textContent += fullText[index];
        index += 1;
        setTimeout(typeNext, typeSpeed);
      }
    };

    typeNext();
  }

  // Keep the footer year up to date without needing to edit HTML each year
  const footerParagraph = document.querySelector("#footer p");
  if (footerParagraph) {
    const year = new Date().getFullYear();
    footerParagraph.textContent = `Copyright © ${year} Aquasen. All rights reserved.`;
  }

  // Gentle accent color cycling to make the page feel alive
  const accentCycle = ["#64805c", "#5b7f95", "#8b6d95", "#5c8a75"];
  let accentIndex = 0;

  setInterval(() => {
    const nextColor = accentCycle[accentIndex % accentCycle.length];
    document.documentElement.style.setProperty("--accent-color", nextColor);
    accentIndex += 1;
  }, 8500);
});
