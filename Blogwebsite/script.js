document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Contact form submission on index page
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const message = document.getElementById("contact-message").value.trim();
            const response = document.getElementById("contact-response");
            if (name && email && message) {
                response.textContent = "Thank you for contacting us! We'll get back to you soon.";
                response.style.color = "green";
                contactForm.reset();
            } else {
                response.textContent = "Please ensure all fields are filled out correctly.";
                response.style.color = "red";
            }
        });
    }

    // Posts page functionality
    const searchBar = document.getElementById("search-bar");
    const postsContainer = document.getElementById("posts-container");
    const searchMessage = document.getElementById("search-message");

    if (searchBar && postsContainer) {
        searchBar.addEventListener("input", () => {
            const searchText = searchBar.value.toLowerCase();
            const posts = postsContainer.querySelectorAll(".post-card");
            let found = false;
            posts.forEach(post => {
                const title = post.getAttribute("data-title").toLowerCase();
                if (title.includes(searchText)) {
                    post.style.display = "flex";
                    found = true;
                } else {
                    post.style.display = "none";
                }
            });
            searchMessage.textContent = found ? "" : "No posts found matching your search.";
            searchMessage.style.color = found ? "" : "var(--grey-text)";
        });
    }

    // Comment submission
    const allForms = document.querySelectorAll(".comment-form");
    allForms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = form.querySelector(".comment-name").value.trim();
            const message = form.querySelector(".comment-message").value.trim();
            const list = form.nextElementSibling;
            if (name && message) {
                const commentItem = document.createElement("div");
                commentItem.classList.add("comment-item");
                commentItem.innerHTML = `<strong>${name}</strong>: ${message} <span style="float:right; font-size:0.8em; color:#bbb;">${new Date().toLocaleDateString()}</span>`;
                list.appendChild(commentItem);
                form.reset();
            }
        });
    });

    // Active link highlighting
    const navLinks = document.querySelectorAll('#nav-menu ul li a');
    navLinks.forEach(link => {
        if (link.href === window.location.href || link.href === window.location.href.split('#')[0] && link.hash === "") {
            link.classList.add('active');
        } else if (link.hash && window.location.href.includes(link.hash)) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});