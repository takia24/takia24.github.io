/* =========================================================
   TAKIA YASMIN PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement = document.getElementById("typing");

const typingRoles = [
    "IoT & Embedded Systems Enthusiast",
    "AI & Machine Learning Enthusiast",
    "Robotics & Automation Enthusiast",
    "Smart Systems Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentRole = typingRoles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex >= currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1700);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex <= 0) {

            isDeleting = false;

            roleIndex =
                (roleIndex + 1) % typingRoles.length;
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 45 : 85
    );
}


/* =========================================================
   PROJECT VIEW ALL / SHOW LESS
========================================================= */

function toggleProjects() {

    const hiddenProjects =
        document.querySelectorAll(".hidden-project");

    const button =
        document.getElementById("projectsToggle");

    if (!hiddenProjects.length || !button) {
        return;
    }

    const isShown =
        hiddenProjects[0]
            .classList
            .contains("show-project");

    hiddenProjects.forEach(project => {

        project.classList.toggle(
            "show-project",
            !isShown
        );

    });

    if (!isShown) {

        button.innerHTML =
            'Show Less <span>−</span>';

    } else {

        button.innerHTML =
            'View All Projects <span>+</span>';

    }
}


/* =========================================================
   EMAILJS
========================================================= */

function initializeEmailJS() {

    if (typeof emailjs !== "undefined") {

        emailjs.init(
            "ZHBv2b9RSlU5ceFaL"
        );

        return true;
    }

    console.warn(
        "EmailJS library was not loaded."
    );

    return false;
}


/* =========================================================
   CONTACT FORM
========================================================= */

function initializeContactForm() {

    const contactForm =
        document.getElementById("contactForm");

    if (!contactForm) return;

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );

            if (!submitButton) return;


            const originalButtonText =
                submitButton.innerHTML;


            /* Check EmailJS */

            if (typeof emailjs === "undefined") {

                alert(
                    "Email service is currently unavailable. Please try again later."
                );

                return;
            }


            /* Loading state */

            submitButton.disabled = true;

            submitButton.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';


            /* Send email */

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

                submitButton.disabled = false;

                submitButton.innerHTML =
                    originalButtonText;

            })

            .catch(function (error) {

                console.error(
                    "EmailJS Error:",
                    error
                );

                alert(
                    "Failed to send message. Please try again later."
                );

                submitButton.disabled = false;

                submitButton.innerHTML =
                    originalButtonText;

            });

        }
    );
}


/* =========================================================
   RESUME / CV EMAIL NOTIFICATION
========================================================= */

function sendMail(event) {

    /*
       Prevent the default link temporarily.
       We send a small EmailJS notification first,
       then open the resume.
    */

    if (event) {
        event.preventDefault();
    }

    const resumeLink =
        event
            ? event.currentTarget.getAttribute("href")
            : "Takia_Yasmin_Resume.pdf";


    if (typeof emailjs === "undefined") {

        window.open(
            resumeLink,
            "_blank"
        );

        return;
    }


    emailjs.send(
        "service_na1vmlo",
        "template_abokmli",
        {
            name: "Portfolio Visitor",
            email: "portfolio@visitor.com",
            subject: "Resume Viewed",
            message:
                "Someone viewed/downloaded Takia Yasmin's resume from the portfolio."
        }
    )
    .finally(function () {

        window.open(
            resumeLink,
            "_blank"
        );

    });

}


/* =========================================================
   SMOOTH SCROLL
========================================================= */

function initializeSmoothScroll() {

    const anchors =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    anchors.forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                /* Close mobile menu */

                const nav =
                    document.querySelector(
                        ".nav-links"
                    );

                const menuButton =
                    document.querySelector(
                        ".menu-toggle"
                    );


                if (nav) {
                    nav.classList.remove(
                        "active"
                    );
                }

                if (menuButton) {
                    menuButton.classList.remove(
                        "active"
                    );
                }

            }
        );

    });

}


/* =========================================================
   ACTIVE NAVBAR LINK
========================================================= */

function initializeActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-links a"
        );

    if (!sections.length || !navLinks.length) {
        return;
    }


    function updateActiveLink() {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute("href");


            if (
                href ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveLink
    );

    updateActiveLink();
}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function initializeMobileMenu() {

    const menuButton =
        document.querySelector(
            ".menu-toggle"
        );

    const nav =
        document.querySelector(
            ".nav-links"
        );


    if (!menuButton || !nav) {
        return;
    }


    menuButton.addEventListener(
        "click",
        function () {

            nav.classList.toggle(
                "active"
            );

            menuButton.classList.toggle(
                "active"
            );

        }
    );


    /* Close menu after clicking a link */

    const navItems =
        nav.querySelectorAll("a");


    navItems.forEach(item => {

        item.addEventListener(
            "click",
            function () {

                nav.classList.remove(
                    "active"
                );

                menuButton.classList.remove(
                    "active"
                );

            }
        );

    });

}


/* =========================================================
   INITIAL PROJECT STATE
========================================================= */

function initializeProjects() {

    const hiddenProjects =
        document.querySelectorAll(
            ".hidden-project"
        );

    const button =
        document.getElementById(
            "projectsToggle"
        );


    hiddenProjects.forEach(project => {

        project.classList.remove(
            "show-project"
        );

    });


    if (button) {

        button.innerHTML =
            'View All Projects <span>+</span>';

    }

}


/* =========================================================
   INITIALIZE EVERYTHING
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* Typing */
        typeEffect();


        /* Projects */
        initializeProjects();


        /* EmailJS */
        initializeEmailJS();


        /* Contact */
        initializeContactForm();


        /* Smooth scrolling */
        initializeSmoothScroll();


        /* Active navigation */
        initializeActiveNavigation();


        /* Mobile menu */
        initializeMobileMenu();

    }
);