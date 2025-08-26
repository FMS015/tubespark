document.getElementById("demoBtn").addEventListener("click", function() {
    const titles = [
        "The Secret Formula to Go Viral 🔥",
        "Boost Subscribers with AI-Powered Titles 🤖",
        "10 Tricks YouTube Doesn’t Want You to Know 😱",
        "How to Get 1,000 Subs in 30 Days 🚀",
        "Unlock the Power of SEO for YouTube 📈",
        "AI Creates the Perfect Viral Title ✨"
    ];

    // Pick a random title from the list
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];

    // Replace the text on your site
    document.getElementById("titleText").innerHTML = randomTitle;
});
