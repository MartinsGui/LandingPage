const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const texts = [
    "Seja bem-vindo ao consultório odontológico Lenkukel & Martins.",
    "Caso haja dúvida, entre em contato."
];
let textIndex = 0;
let charIndex = 0;

const typingEffect = document.getElementById("typing-effect");

function type() {
    if (charIndex < texts[textIndex].length) {
        typingEffect.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingEffect.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);
