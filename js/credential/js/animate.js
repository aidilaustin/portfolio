//popup-animation
document.querySelector('.home-image img').addEventListener('mouseover', function() {
    this.classList.add('pop-up');
});
document.querySelector('.home-image img').addEventListener('mouseout', function() {
    this.classList.remove('pop-up');
});

// animation-typing
const nameText = ['A', 'i', 'd', 'i', 'l'];
let index = 0;
let isTyping = false;
function typeText() {
    if (index < nameText.length) {
        document.getElementById('name').innerHTML += nameText[index];
        index++;
        setTimeout(typeText, 800);
    } else {
        isTyping = false;
    }
}
function startTypingAnimation() {
    document.getElementById('name').innerHTML = '';
    index = 0; 
    isTyping = true;
    typeText();
}
window.onload = function() {
    if (!isTyping) {
        startTypingAnimation();
    }
};
document.getElementById('navbar-logo').addEventListener('click', function(event) {
    event.preventDefault();
    if (!isTyping) {
        startTypingAnimation();
    }
});

// arrow-navigator-for-about-page
document.querySelector('.bounce-arrow').addEventListener('click', function() {
    document.querySelector('#iot-projects').scrollIntoView({
        behavior: 'smooth'
    });
});

