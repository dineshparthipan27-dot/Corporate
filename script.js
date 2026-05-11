const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("active", window.scrollY > 50);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* CONTACT FORM VALIDATION */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Inputs
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Name
  if (fullName.value.trim() === "") {
    showError(fullName, "Full name is required");
    isValid = false;
  } else {
    showSuccess(fullName);
  }

  // Email
  if (!validateEmail(email.value.trim())) {
    showError(email, "Enter a valid email");
    isValid = false;
  } else {
    showSuccess(email);
  }

  // Subject
  if (subject.value.trim() === "") {
    showError(subject, "Subject is required");
    isValid = false;
  } else {
    showSuccess(subject);
  }

  // Message
  if (message.value.trim().length < 10) {
    showError(message, "Message must be at least 10 characters");
    isValid = false;
  } else {
    showSuccess(message);
  }

  // Final Submit
  if (isValid) {
    window.location.href = 'index404.html';
  }
});


/* NEWSLETTER VALIDATION */

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newsletterEmail =
    document.getElementById("newsletterEmail");

  const errorText =
    document.querySelector(".newsletter-error");

  if (!validateEmail(newsletterEmail.value.trim())) {
    errorText.innerText = "Please enter a valid email";
    newsletterEmail.style.border = "1px solid red";
  } else {
    window.location.href = 'index404.html';
  }
});


/* HELPER FUNCTIONS */

function showError(input, message) {
  const inputBox = input.parentElement;
  const error = inputBox.querySelector(".error");

  inputBox.classList.add("error");
  inputBox.classList.remove("success");

  error.innerText = message;
}

function showSuccess(input) {
  const inputBox = input.parentElement;
  const error = inputBox.querySelector(".error");

  inputBox.classList.remove("error");
  inputBox.classList.add("success");

  error.innerText = "";
}

function validateEmail(email) {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}