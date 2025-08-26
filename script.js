// Demo viral titles
const demoTitles = [
  "Boost Subscribers with AI-Powered Titles 🤖",
  "Get 1M Views with Smart SEO Tricks 🚀",
  "Viral YouTube Titles That Actually Work 🔥",
  "Skyrocket Your Channel Growth with AI 📈",
  "The Secret Formula for YouTube Success ✨"
];

const button = document.getElementById("demoBtn");
const titleText = document.getElementById("titleText");

// Function to change text with fade effect
button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * demoTitles.length);
  titleText.classList.remove("show"); // fade out

  setTimeout(() => {
    titleText.textContent = demoTitles[randomIndex];
    titleText.classList.add("show"); // fade in
  }, 300);
});

// First load: show the title with fade
window.onload = () => {
  titleText.classList.add("show");
};
