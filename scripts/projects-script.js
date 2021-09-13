var projectDiv = document.querySelector(".projects");

var projectArr = [
    {
        title: "Do You Know Me?",
        desc: "Play this short quiz to see just how much you know about me, the creator of this quiz!",
        liveURL: "https://www.replit.com/@Hamdrive/mark1?embed=1&output=1#index.js",
        repoURL: "https://github.com/Hamdrive/markOne",
    },   
    {
        title: "S'All Quiz-Man?",
        desc: "Are you a Breaking Bad fan? If so, surely you must also be a fan of the show Better Call Saul. But just how big of a fan are you of the Universe? Take this quiz to find out!",
        liveURL: "https://replit.com/@Hamdrive/mark-2?embed=1&output=1#index.js",
        repoURL: "https://github.com/Hamdrive/markTwo",
    },   
    {
        title: "My Portfolio",
        desc: "The very portfolio you're looking at!",
        liveURL: "",
        repoURL: "",
    },   
    {
        title: "Bello Banana!",
        desc: "Are you a fan of the minions? Then you should definitely know how to speak banana! Learn here from the translator app, its very easy. Just type out your sentence, click the button and get your banana on!",
        liveURL: "https://bellobanana.netlify.app",
        repoURL: "https://github.com/Hamdrive/markSix",
    },   
    {
        title: "THU'UM Translator",
        desc: "Are you an Elder Scroll: Skyrim fan? Have you always wanted to know the meaning of the THU'UM and impress others with your voice? Well now you can, with the help of this translator!",
        liveURL: "https://speakthuum.netlify.app",
        repoURL: "https://github.com/Hamdrive/markSeven",
    },   
    {
        title: "Sport Emojis",
        desc: "Ever come across an emoji you don't know? Look no further than this very app. Just enter the emoji and find out what it represents (Only works with emojis relating to sports).",
        liveURL: "https://translateyouremoji.netlify.app",
        repoURL: "https://github.com/Hamdrive/markEight",
    },   
    {
        title: "Good Music",
        desc: "Heard of Goodreads? Well this is Goodmusic! A top 5 list of my recommended music in my favourite genres.",
        liveURL: "https://musicyclopedia.netlify.app",
        repoURL: "https://github.com/Hamdrive/markNine",
    },   
    {
        title: "Ding Ding Ding!",
        desc: "Have you ever had to return money and thought \"I wonder what is the least number of notes I can return to them so they have to carry less\" ? If so, then this app is for you!",
        liveURL: "",
        repoURL: "https://github.com/Hamdrive/markTen",
    },   
    {
        title: "Lucky Birthday",
        desc: "Want to know if your birthday is lucky? Try it right here. Enter your birthday and lucky number, and find out!",
        liveURL: "https://getyourluckybday.netlify.app",
        repoURL: "https://github.com/Hamdrive/markEleven",
    },   
    {
        title: "Trianglefy!",
        desc: "How good are you with triangles? Or do you need to solve some basic calculations? Well, you're in luck!! Check out the Triangle app and you can: Test your triangle knowledge, Calculate Area of triangle, Calculate Hypotenuse & Check if any 3 angles can create a triangle",
        liveURL: "https://trianglefy.netlify.app",
        repoURL: "https://github.com/Hamdrive/markTwelve",
    },   
    {
        title: "Palindrome Birthday",
        desc: "Ever wondered if your birthday is magical? Use this app to check if your birthdate is palindrome!",
        liveURL: "https://isitpalindromebday.netlify.app",
        repoURL: "https://github.com/Hamdrive/markThirteen",
    },   
    {
        title: "Bullish or Bearish?",
        desc: "Do you trade in stocks? Want to check how it's performing? Well this app will help you see if you're in the GREEN or RED!",
        liveURL: "https://isitprofitorloss.netlify.app",
        repoURL: "https://github.com/Hamdrive/markFourteen",
    },   
]

var index = 0;
for(var project of projectArr){
    index++;
    console.log(project)
    var projectCard = document.createElement("article");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
        <div class="project-title"><p>${project.title}</p></div>
        <div class="project-desc"><p>${project.desc}</p></div>
        <div class="live-demo"><a target="_blank" href="${project.liveURL}"><button id="live-demo-btn">Live Demo</button></a></div>
        <div class="repo-source"><a target="_blank" href="${project.repoURL}"><button id="repo-source-btn">Source Code</button></a></div>
    `;
    projectDiv.appendChild(projectCard);
}