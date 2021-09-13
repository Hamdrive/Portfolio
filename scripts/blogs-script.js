var blogDiv = document.querySelector(".blogs");

var blogArr = [
    {
        title: "My first ever Web Dev interview: Journey and Lessons learned",
        date: "Jun 8, 2021",
        duration: "7",
        snippet: "If you were always led to believe that an interview is the most horrifying thing to undergo, I can sympathize with you. You've either heard or experienced it yourself ...",
        blogURL: "https://hamzahusein.hashnode.dev/my-first-ever-web-dev-interview-journey-and-lessons-learned"
    },
    {
        title: "My take on: #2 Should Tailwind be the new 'defacto' for styling?",
        date: "May 13, 2021",
        duration: "4",
        snippet: "I'm sure you've come across various ways to style your website or app. As a beginner, I remember coming across so many different ways to style ...",
        blogURL: "https://hamzahusein.hashnode.dev/my-take-on-2-should-tailwind-be-the-new-defacto-for-styling"
    },
    {
        title: "Why I LOVE Functional Components in React (Class is still cool)",
        date: "Apr 11, 2021",
        duration: "3",
        snippet: "It's been nearly 2 months since I started on The Odin Project, and I must say I was very excited when I finally started with the React section ...",
        blogURL: "https://hamzahusein.hashnode.dev/why-i-love-functional-components-in-react"
    },

]

var index = 0;
for(var blog of blogArr){
    index++;
    var blogCard = document.createElement("article");
    blogCard.classList.add("blog-card");
    blogCard.innerHTML = `
        <div class="blog-title"><p>${blog.title}</p></div>
        <div class="blog-info">
            <p>📅&nbsp;${blog.date}</p>
            <p>🕔&nbsp;${blog.duration} mins read</p>
        </div>
        <div class="blog-snippet"><p>${blog.snippet}</p></div>
        <div class="read-more"><a target="_blank" href="${blog.blogURL}"><button id="read-more-btn">Read More</button></a></div>
    `;
    blogDiv.appendChild(blogCard);
}