document.addEventListener("DOMContentLoaded", function () {

  // ===== Dark Mode Toggle =====
  const toggle = document.getElementById("themeToggle");

  if (toggle) {
    toggle.addEventListener("click", function () {

      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        toggle.textContent = "☀️";
      } else {
        toggle.textContent = "🌙";
      }

    });
  }

  // ===== Smooth Scroll =====
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  // ===== Active Nav Highlight =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // ===== Fade-in Animation =====
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });

});


const text = ["Aspiring IoT Engineer", "Embedded Systems Enthusiast", "ESP32 Developer"];
let i = 0, j = 0;

function type() {
  if (j < text[i].length) {
    document.getElementById("typing").innerHTML += text[i][j];
    j++;
    setTimeout(type, 60);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    document.getElementById("typing").innerHTML = text[i].substring(0, j-1);
    j--;
    setTimeout(erase, 40);
  } else {
    i = (i+1) % text.length;
    setTimeout(type, 300);
  }
}

type();



window.onload = function () {

  const text = "Passionate about building smart systems using IoT, automation, and embedded technologies.";

  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      document.getElementById("hero-desc").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 25);
    }
  }

  typeEffect();

};

