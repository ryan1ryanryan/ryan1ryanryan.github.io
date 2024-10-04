const walker = document.getElementById('qijun');
let position = -100;
let tiltDirection = 1;
const windowWidth = window.innerWidth;

// Function to move the walker image smoothly
function moveWalker() {
    position += 5;
    walker.style.left = position + 'px';

    if (position > windowWidth) {
        position = -100;
    }

    requestAnimationFrame(moveWalker);
}

// Function to toggle tilt every 1 second
function toggleTilt() {
    walker.style.transform = `rotate(${tiltDirection * 10}deg)`;
    tiltDirection *= -1; // Reverse the tilt direction
}

// Start the movement
moveWalker();

// Change tilt every 1 second
setInterval(toggleTilt, 400);
