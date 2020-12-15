// Menu show Y Hidden
const navMenu = document.getElementById("nav-menu");
const toggleMenu = document.getElementById("nav-toggle");
const closeMenu = document.getElementById("nav-close");

// Show
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// Hidden
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
// Remove Menu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Scroll Sections active link
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

// CONTACT FORM SCRIPT //

function validateForm() {
  let name = document.contactForm.name.value;
  let email = document.contactForm.email.value;
  let project = document.contactForm.project.value;
  let message = document.contactForm.message.value;
  if (name == "" || email == "" || project == "" || message == "") {
    document.querySelector(".error").innerHTML = "Please fill all the fields.";
  } else {
    document.querySelector(".error").innerHTML = "";
    document.querySelector(".success").innerHTML =
      "I got your details. I will contact to you soon.";
    document.contactForm.name.value = "";
    document.contactForm.email.value = "";
    document.contactForm.project.value = "";
    document.contactForm.message.value = "";
  }
}
