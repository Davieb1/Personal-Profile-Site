// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active"); // Toggle the active class
});

// Modal functionality
const modal = document.getElementById("businessCardModal");
const closeBtn = document.getElementsByClassName("close")[0];
const hireBtn = document.getElementById("btn-hire");

if (modal && closeBtn && hireBtn) {
    hireBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

// To-Do List functionality
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const taskForm = document.getElementById("taskForm");

if (taskList && taskInput && taskForm) {
    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();
        addTask();
    });

    function addTask() {
        if (taskInput.value !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <label>${taskInput.value}</label>`;
            li.classList.add("task");
            taskList.appendChild(li);

            const checkbox = li.querySelector(".task-checkbox");
            checkbox.addEventListener("change", function () {
                li.style.backgroundColor = this.checked ? "lightgreen" : "";
            });

            taskInput.value = "";
        }
    }
}

// Random Quote Generator
const quotes = [
    "The only way to do great work is love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "If you're going through hell, keep going. - Bruce Springsteen",
    "Believe you can and you're halfway there. - Lao Tzu",
    "The greatest accomplishment is not in never falling, but in rising every time we fall. - Confucius",
    "The journey of a thousand miles begins with a single step. - Lao Tzu",
    "It is our choices, Harry, that show what we truly are, far more than our abilities. - Stephen Hawking"
];

const quoteButton = document.getElementById("quoteButton");
const quoteDisplay = document.getElementById("quoteDisplay");

if (quoteButton && quoteDisplay) {
    quoteButton.addEventListener("click", generateQuote);

    function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    }
}

// Blog Page "Read More" functionality
function setupReadMore() {
    const buttons = document.querySelectorAll(".read-more");

    if (buttons.length === 0) {
        console.log("No .read-more buttons found on the page.");
        return;
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const blogPost = this.parentElement;
            blogPost.classList.toggle("expanded");

            if (blogPost.classList.contains("expanded")) {
                this.textContent = "Read Less";

                // Ensure there's not already extra content before adding it
                if (!blogPost.querySelector(".more")) {
                    const moreContent = document.createElement("p");
                    moreContent.classList.add("more");
                    moreContent.textContent = "Here’s the rest of the blog post. You can learn more about the topic here...";
                    blogPost.appendChild(moreContent);
                }
            } else {
                this.textContent = "Read More";

                // Remove the extra content
                const moreContent = blogPost.querySelector(".more");
                if (moreContent) moreContent.remove();
            }
        });
    });
}

// Call setupReadMore once the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    setupReadMore();
});
