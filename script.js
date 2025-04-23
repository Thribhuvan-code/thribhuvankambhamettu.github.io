// Typing effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Developer", "Designer", "Tech Enthusiast", "Freelancer"];
const typingDelay = 100;
const erasingDelay = 70;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, typingDelay + 500);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Contact form message
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for reaching out!");
});

// Sparkle effect on hero section
const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  const rect = hero.getBoundingClientRect();
  sparkle.style.left = `${e.clientX - rect.left}px`;
  sparkle.style.top = `${e.clientY - rect.top}px`;

  hero.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 800);
});

// Initialize EmailJS with your user ID
(function() {
  emailjs.init("user_your_user_id"); // Replace 'user_your_user_id' with your actual user ID
})();

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Send the email using EmailJS
  emailjs.sendForm('service_96prfqa', 'template_your_template_id', this)
    .then(function(response) {
      document.getElementById("status").textContent = "Message sent successfully!";
      console.log('Success!', response);
    }, function(error) {
      document.getElementById("status").textContent = "Oops! Something went wrong.";
      console.log('Error...', error);
    });
});


// Motivational Quote Rotation
const quotes = [
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt"
];

let currentQuoteIndex = 0;

function changeQuote() {
  const quoteElement = document.getElementById("motivational-quote");
  quoteElement.textContent = quotes[currentQuoteIndex];
  
  // Move to the next quote
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

// Change the quote every 5 seconds
setInterval(changeQuote, 5000);

// Initial quote display
changeQuote();



// Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// When the user clicks the button, scroll to the top of the document
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
