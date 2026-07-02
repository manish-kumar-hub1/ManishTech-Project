/* ===========================================
   Manish Tech Solutions
   Founder: Manish Kumar
   script.js
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       DARK MODE
    ========================== */

    const themeBtn = document.querySelector(".theme-btn");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        if (themeBtn) {
            themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {

                localStorage.setItem("theme", "dark");

                themeBtn.innerHTML =
                    '<i class="fa-solid fa-sun"></i>';

            } else {

                localStorage.setItem("theme", "light");

                themeBtn.innerHTML =
                    '<i class="fa-solid fa-moon"></i>';

            }

        });

    }

    /* =========================
       SCROLL REVEAL
    ========================== */

    const hiddenItems = document.querySelectorAll(
        ".card,.feature-box,.project-card,.testimonial-card,.stat-card"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });

    hiddenItems.forEach((item) => {

        observer.observe(item);

    });

    /* =========================
       COUNTER ANIMATION
    ========================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = Number(counter.dataset.target);

            const current = Number(counter.innerText);

            const increment = Math.ceil(target / 80);

            if (current < target) {

                counter.innerText = current + increment;

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

    /* =========================
       BACK TO TOP BUTTON
    ========================== */

    const topBtn = document.createElement("button");

    topBtn.id = "topBtn";

    topBtn.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* =========================
       CONTACT FORM
    ========================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const message =
                document.getElementById("message").value.trim();

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (name.length < 3) {

                alert("Please enter a valid name.");

                return;

            }

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }

            if (phone.length < 10) {

                alert("Please enter a valid phone number.");

                return;

            }

            if (message.length < 10) {

                alert("Message should contain at least 10 characters.");

                return;

            }

            alert("Thank you! Your message has been submitted successfully.");

            form.reset();

        });

    }

});