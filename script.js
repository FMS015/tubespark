function generate() {
  const ideas = [
    "10 Secrets to Boost Your YouTube Views 🚀",
    "The Ultimate Guide to Viral Titles 🔥",
    "TubeSpark Demo: Smarter SEO, More Subs 🎯",
    "Boost Subscribers with AI-Powered Titles 🤖"
  ];

  // Pick a random idea
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];

  // Show it on the page
  document.getElementById("output").innerText = randomIdea;
}
