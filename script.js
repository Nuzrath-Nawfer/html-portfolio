const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  // Change icon depending on mode
  if (body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌙 Dark mode"; // Moon for dark mode
  } else {
    themeToggle.textContent = "🌞 Light mode"; // Sun for light mode
  }
});
