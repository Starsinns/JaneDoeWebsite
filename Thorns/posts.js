// Thorns/posts.js
import blog from "./blog.js";

const container = document.getElementById("posts-container");

const postKeys = Object.keys(blog).reverse();

postKeys.forEach((key, index) => {
    const post = blog[key];

    const postBlock = document.createElement("div");
    postBlock.className = "post-block";
    if (index > 0) {
        const separator = document.createElement("div");
        separator.className = "line";
        container.appendChild(separator);
    }

    const title = document.createElement("h2");
    title.className = "posttitle";
    title.textContent = post.title;

    const date = document.createElement("h3");
    date.className = "datentime";
    date.textContent = post.date;

    const content = document.createElement("div");
    content.className = "post-content";
    content.innerHTML = post.content;

    postBlock.appendChild(title);
    postBlock.appendChild(date);
    postBlock.appendChild(content);

    container.appendChild(postBlock);
});