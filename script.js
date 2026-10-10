// ========================================
// MOBILE MENU
// ========================================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu when clicking a link

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ========================================
// BACK TO TOP BUTTON
// ========================================

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ========================================
// CONTACT FORM
// ========================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const email =
        document.getElementById("email").value;


    const subject =
        document.getElementById("subject").value;


    const message =
        document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {

        alert("Please fill all fields.");

        return;

    }


    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted."
    );


    contactForm.reset();

});


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements =
    document.querySelectorAll(
        ".section, .skill-card, .project-card, .timeline-item"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.1
        }

    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});