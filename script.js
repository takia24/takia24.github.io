/* =========================================================
   TAKIA PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   EMAILJS
========================================================= */

(function () {

    emailjs.init("ZHBv2b9RSlU5ceFaL");

})();



/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement =
    document.getElementById("typing");


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

    if (!typingElement) return;


    const currentText =
        typingTexts[textIndex];


    if (!deleting) {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            textIndex =
                (textIndex + 1)
                % typingTexts.length;

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 80
    );

}


document.addEventListener(
    "DOMContentLoaded",
    function () {

        typeEffect();

    }
);



/* =========================================================
   PROJECT VIEW ALL
========================================================= */

function toggleProjects() {

    const hiddenProjects =
        document.querySelectorAll(
            ".hidden-project"
        );


    const button =
        document.getElementById(
            "projectsToggle"
        );


    if (!hiddenProjects.length || !button) {
        return;
    }


    const isShown =
        hiddenProjects[0]
            .classList
            .contains("show-project");


    hiddenProjects.forEach(
        project => {

            project.classList.toggle(
                "show-project",
                !isShown
            );

        }
    );


    button.innerHTML =
        !isShown

        ? 'Show Less <span>−</span>'

        : 'View All Projects <span>+</span>';

}



/* =========================================================
   PROJECT INITIAL STATE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        document
            .querySelectorAll(
                ".hidden-project"
            )
            .forEach(
                project => {

                    project.classList.remove(
                        "show-project"
                    );

                }
            );

    }
);



/* =========================================================
   CONTACT FORM — EMAILJS
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const button =
                contactForm.querySelector(
                    ".submit-btn"
                );


            const originalText =
                button.innerHTML;


            button.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

            button.disabled = true;


            emailjs
                .sendForm(
                    "service_na1vmlo",
                    "template_abokmli",
                    contactForm
                )

                .then(
                    function () {

                        button.innerHTML =
                            '<i class="fa-solid fa-check"></i> Message Sent';

                        contactForm.reset();


                        setTimeout(
                            function () {

                                button.innerHTML =
                                    originalText;

                                button.disabled =
                                    false;

                            },
                            2500
                        );

                    },

                    function (error) {

                        console.error(
                            "EmailJS Error:",
                            error
                        );


                        button.innerHTML =
                            '<i class="fa-solid fa-xmark"></i> Failed to Send';


                        setTimeout(
                            function () {

                                button.innerHTML =
                                    originalText;

                                button.disabled =
                                    false;

                            },
                            2500
                        );

                    }
                );

        }
    );

}



/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.querySelector(
        ".menu-toggle"
    );


const navLinks =
    document.querySelector(
        ".nav-links"
    );


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "mobile-open"
            );

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.classList.remove(
                            "mobile-open"
                        );

                    }
                );

            }
        );

}



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 150;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navigationLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);



/* =========================================================
   RESUME CLICK NOTIFICATION
========================================================= */

function sendMail(event) {

    /*
       Resume opens normally.
       This function keeps compatibility
       with the previous portfolio setup.
    */

    return true;

}