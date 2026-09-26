/* =========================================
   TYPING EFFECT
========================================= */

const typingText = document.getElementById("typing");

const roles = [
    "IoT & Embedded Systems Enthusiast",
    "AI & Machine Learning Enthusiast",
    "Robotics & Automation Enthusiast",
    "Smart Systems Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }
    } else {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 90);
}


/* =========================================
   PROJECT VIEW ALL / SHOW LESS
========================================= */

function toggleProjects() {
    const hiddenProjects =
        document.querySelectorAll(".hidden-project");

    const button =
        document.getElementById("projectsToggle");

    if (!hiddenProjects.length || !button) return;

    const isShown =
        hiddenProjects[0].classList.contains("show-project");

    hiddenProjects.forEach(project => {
        project.classList.toggle("show-project", !isShown);
    });

    button.innerHTML = !isShown
        ? 'Show Less <span>−</span>'
        : 'View All Projects <span>+</span>';
}


/* =========================================
   EMAILJS INITIALIZATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* Start typing effect */
    typeEffect();

    /* Keep hidden projects hidden initially */
    document
        .querySelectorAll(".hidden-project")
        .forEach(project => {
            project.classList.remove("show-project");
        });


    /* Initialize EmailJS */
    if (typeof emailjs !== "undefined") {
        emailjs.init("ZHBv2b9RSlU5ceFaL");
    }


    /* =====================================
       CONTACT FORM
    ===================================== */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const submitButton =
                contactForm.querySelector("button[type='submit']");

            if (!submitButton) return;

            const originalText = submitButton.innerHTML;

            submitButton.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            submitButton.disabled = true;


            emailjs.sendForm(
                "service_na1vmlo",
                "template_abokmli",
                contactForm
            )
            .then(function () {

                alert(
                    "Message sent successfully! Thank you for contacting me."
                );

                contactForm.reset();

                submitButton.innerHTML = originalText;
                submitButton.disabled = false;

            })
            .catch(function (error) {

                console.error("EmailJS Error:", error);

                alert(
                    "Failed to send message. Please try again later."
                );

                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            });

        });
    }

});


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

});


/* =========================================
   NAVBAR ACTIVE LINK
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinksContainer =
    document.querySelector(".nav-links");

if (menuToggle && navLinksContainer) {

    menuToggle.addEventListener("click", function () {

        navLinksContainer.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });


    navLinksContainer
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", function () {

                navLinksContainer.classList.remove("active");
                menuToggle.classList.remove("active");

            });

        });

}