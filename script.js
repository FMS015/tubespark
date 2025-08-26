// Array of demo viral titles
const demoTitles = [
  "Boost Subscribers with AI-Powered Titles 🤖",
  "Get 1M Views with Smart SEO Tricks 🚀",
  "Viral YouTube Titles That Actually Work 🔥",
  "Skyrocket Your Channel Growth with AI 📈",
  "The Secret Formula for YouTube Success ✨"
];

// Pick the elements
const button = document.getElementById("demoBtn");
const titleText = document.getElementById("titleText");

// Change text on button click
button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * demoTitles.length);
  titleText.textContent = demoTitles[randomIndex];
});
