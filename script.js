/* ================= TYPING EFFECT ================= */

const typingElement = document.getElementById("typing");

const typingTexts = [
    "IoT & Embedded Systems Developer",
    "AI & Machine Learning Enthusiast",
    "Robotics & Automation Enthusiast",
    "Smart Systems Builder"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentText = typingTexts[textIndex];

    if (!deleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1600);

            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex =
                (textIndex + 1) % typingTexts.length;

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 75
    );

}

typeEffect();



/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const icon =
            menuBtn.querySelector("i");

        if (navLinks.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


/* Close menu after clicking */

document.querySelectorAll(".nav-link").forEach(
    link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            const icon =
                menuBtn?.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }
);



/* ================= VIEW ALL PROJECTS ================= */

const viewAllButton =
    document.getElementById("viewAllProjects");

const moreProjects =
    document.getElementById("moreProjects");

if (viewAllButton && moreProjects) {

    viewAllButton.addEventListener("click", function () {

        moreProjects.classList.toggle("show");

        const icon =
            viewAllButton.querySelector("i");

        if (moreProjects.classList.contains("show")) {

            viewAllButton.innerHTML =
                'Show Less Projects <i class="fa-solid fa-minus"></i>';

            moreProjects.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        } else {

            viewAllButton.innerHTML =
                'View All Projects <i class="fa-solid fa-plus"></i>';

        }

    });

}



/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const button =
                contactForm.querySelector(
                    ".send-message-btn"
                );

            const originalText =
                button.innerHTML;

            button.innerHTML =
                'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';

            button.disabled = true;


            const templateParams = {

                from_name:
                    document.getElementById("name").value,

                from_email:
                    document.getElementById("email").value,

                subject:
                    document.getElementById("subject").value,

                message:
                    document.getElementById("message").value

            };


            emailjs.send(
                "service_na1vmlo",
                "template_abokmli",
                templateParams
            )

            .then(function () {

                alert(
                    "Thank you! Your message has been sent successfully. 😊"
                );

                contactForm.reset();

                button.innerHTML =
                    originalText;

                button.disabled = false;

            })

            .catch(function (error) {

                console.log(
                    "EmailJS Error:",
                    error
                );

                alert(
                    "Message could not be sent. Please email me directly."
                );

                button.innerHTML =
                    originalText;

                button.disabled = false;

            });

        }
    );

}



/* ================= RESUME EMAIL ALERT ================= */

function sendResume(event) {

    event.preventDefault();

    const resumeButton =
        event.currentTarget;

    resumeButton.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Opening...';


    const params = {

        name: "Portfolio Visitor",

        time:
            new Date().toLocaleString(),

        email:
            "portfolio@visitor.com"

    };


    emailjs.send(
        "service_na1vmlo",
        "template_abokmli",
        params
    )

    .then(function () {

        window.open(
            "Takia_Yasmin_Resume.pdf",
            "_blank"
        );

        resumeButton.innerHTML =
            '<i class="fa-regular fa-file-lines"></i> CV / Resume';

    })

    .catch(function (error) {

        console.log(error);

        window.open(
            "Takia_Yasmin_Resume.pdf",
            "_blank"
        );

        resumeButton.innerHTML =
            '<i class="fa-regular fa-file-lines"></i> CV / Resume';

    });

}