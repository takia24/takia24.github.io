/* =========================================================
   TAKIA YASMIN PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   EMAILJS INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    if (typeof emailjs !== "undefined") {

        emailjs.init("ZHBv2b9RSlU5ceFaL");

    }

});


/* =========================================================
   RESUME / EMAIL NOTIFICATION
========================================================= */

function sendMail(event) {

    if (event) {
        event.preventDefault();
    }

    const resumeURL = "Takia_Yasmin_Resume.pdf";


    /* If EmailJS is not loaded,
       simply open the resume */

    if (typeof emailjs === "undefined") {

        window.open(resumeURL, "_blank");

        return;

    }


    emailjs.send(
        "service_na1vmlo",
        "template_abokmli",
        {
            name: "Portfolio Visitor",
            time: new Date().toLocaleString(),
            email: "portfolio@visitor.com"
        }
    )

    .then(function () {

        window.open(resumeURL, "_blank");

    })

    .catch(function (error) {

        console.log("EmailJS Error:", error);

        /* Resume should still open
           even if email notification fails */

        window.open(resumeURL, "_blank");

    });

}


/* =========================================================
   PROJECT SHOW / HIDE
========================================================= */

function toggleProjects() {

    const hiddenProjects =
        document.querySelectorAll(".hidden-project");

    const button =
        document.getElementById("projectsToggle");


    if (!hiddenProjects.length || !button) {
        return;
    }


    const currentlyHidden =
        hiddenProjects[0].style.display === "none"
        ||
        getComputedStyle(hiddenProjects[0]).display === "none";


    if (currentlyHidden) {

        /* SHOW ALL */

        hiddenProjects.forEach(function (project) {

            project.style.display = "block";

        });

        button.innerHTML =
            'Show Less <span>−</span>';


    } else {

        /* HIDE AGAIN */

        hiddenProjects.forEach(function (project) {

            project.style.display = "none";

        });

        button.innerHTML =
            'View All Projects <span>+</span>';


        /* Optional: scroll slightly back to project section */

        const projectsSection =
            document.getElementById("projects");

        if (projectsSection) {

            projectsSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }

}


/* =========================================================
   INITIAL PROJECT STATE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const hiddenProjects =
        document.querySelectorAll(".hidden-project");

    hiddenProjects.forEach(function (project) {

        project.style.display = "none";

    });


    const button =
        document.getElementById("projectsToggle");

    if (button) {

        button.innerHTML =
            'View All Projects <span>+</span>';

    }

});


/* =========================================================
   TYPING EFFECT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const typingElement =
        document.getElementById("typing");


    if (!typingElement) {
        return;
    }


    const typingTexts = [

        "IoT & Embedded Systems Enthusiast",

        "AI & Machine Learning Enthusiast",

        "Robotics & Automation Enthusiast",

        "Smart Systems Developer"

    ];


    let textIndex = 0;

    let charIndex = 0;

    let deleting = false;


    function typeEffect() {

        const currentText =
            typingTexts[textIndex];


        /* =========================
           TYPING
        ========================= */

        if (!deleting) {

            typingElement.textContent =
                currentText.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;


            if (
                charIndex >=
                currentText.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1500
                );

                return;

            }

        }


        /* =========================
           DELETING
        ========================= */

        else {

            typingElement.textContent =
                currentText.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;


            if (charIndex <= 0) {

                deleting = false;

                textIndex =
                    (
                        textIndex + 1
                    )
                    %
                    typingTexts.length;

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 45 : 85
        );

    }


    typeEffect();

});


/* =========================================================
   NAVBAR ACTIVE LINK
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-links a");


    window.addEventListener("scroll", function () {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop
                &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (
                href === "#" +
                currentSection
            ) {

                link.classList.add("active");

            }

        });

    });

});


/* =========================================================
   CONTACT FORM
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const contactForm =
        document.querySelector(".contact-form");


    if (!contactForm) {
        return;
    }


    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                contactForm.querySelector(
                    'input[name="name"]'
                );

            const email =
                contactForm.querySelector(
                    'input[name="email"]'
                );

            const subject =
                contactForm.querySelector(
                    'input[name="subject"]'
                );

            const message =
                contactForm.querySelector(
                    'textarea[name="message"]'
                );


            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                return;

            }


            if (
                typeof emailjs === "undefined"
            ) {

                alert(
                    "Email service is not available right now."
                );

                return;

            }


            emailjs.send(
                "service_na1vmlo",
                "template_abokmli",
                {
                    name: name.value,
                    email: email.value,
                    subject: subject.value,
                    message: message.value
                }
            )

            .then(function () {

                alert(
                    "Message sent successfully! 😊"
                );

                contactForm.reset();

            })

            .catch(function (error) {

                console.log(
                    "EmailJS Error:",
                    error
                );

                alert(
                    "Message could not be sent. Please try again."
                );

            });

        }
    );

});