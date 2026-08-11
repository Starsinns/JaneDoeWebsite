// main.js
import blog from "./blog.js";

// Get elements
const latestTitle = document.querySelector(".posttitle");
const latestDateTime = document.querySelector(".datentime");
const latestPreview = document.querySelector(".preview");
const continueLink = document.querySelector(".continue");
const statusFeed = document.querySelector(".statusfeed");

// Get all posts as an array, in order
const postKeys = Object.keys(blog); // ["1st Post", "2nd Post", "3rd Post"]
const latestKey = postKeys[postKeys.length - 1]; // last post
const latest = blog[latestKey];

// Fill latest entry
latestTitle.textContent = latest.title;
latestDateTime.textContent = `${latest.date} // ${latest.time}`;
latestPreview.textContent = latest.preview;
continueLink.href = `post.html?post=${encodeURIComponent(latestKey)}`;

// Build status updates (one per post, newest first)
const statusItems = postKeys
    .slice()
    .reverse()
    .map(key => {
        const p = blog[key];
        const dateForStatus = p.date.replace(/(\d+)(st|nd|rd|th)/, "$1"); // "24th February 2006" -> "24 February 2006"
        return {
            time: `${dateForStatus} ${p.time}`,
            text: p.preview
        };
    });

statusFeed.innerHTML = statusItems
    .map(
        s =>
            `<li><span class="statustime">${s.time}: </span>${s.text}</li>`
    )
    .join("");