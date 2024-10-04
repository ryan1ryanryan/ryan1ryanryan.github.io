const walker1 = document.getElementById('jarrel');
let position1 = -100;
let tiltDirection1 = 1;
const windowWidth = window.innerWidth;

function moveWalker1() {
    position1 += 5;
    walker1.style.left = position1 + 'px';

    if (position1 > windowWidth) {
        position1 = -100;
    }

    requestAnimationFrame(moveWalker1);
}

function toggleTilt1() {
    walker1.style.transform = `rotate(${tiltDirection1 * 10}deg)`;
    tiltDirection1 *= -1;
}

setTimeout(() => {
    moveWalker1();
}, 2000);

setInterval(toggleTilt1, 400);

const walker2 = document.getElementById('qijun');
let position2 = -100;
let tiltDirection2 = 1;

function moveWalker2() {
    position2 += 5;
    walker2.style.left = position2 + 'px';

    if (position2 > windowWidth) {
        position2 = -100;
    }

    requestAnimationFrame(moveWalker2);
}

function toggleTilt2() {
    walker2.style.transform = `rotate(${tiltDirection2 * 10}deg)`;
    tiltDirection2 *= -1;
}

moveWalker2();
setInterval(toggleTilt2, 400);
