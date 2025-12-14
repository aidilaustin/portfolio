const messages = [
    "Currently working on improvements",,
    "Site is getting a fresh upgrade",
    "Let’s connect. Feel free to reach out to me on LinkedIn",
    "Will be back shortly. Stay tuned!"
];

let index = 0;
const messageElement = document.getElementById("message");

setInterval(() => {
    index = (index + 1) % messages.length;
    messageElement.innerHTML = messages[index] + "<br>Please check back soon.";
}, 3000);
