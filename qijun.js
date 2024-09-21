const walker = document.getElementById('walker');
        let position = -100;
        let tiltDirection = 1;
        let frameCounter = 0;
        const windowWidth = window.innerWidth;

        function moveWalker() {
            position += 5;
            walker.style.left = position + 'px';

            // Change tilt direction every 10 frames
            if (frameCounter % 10 === 0) {
                walker.style.transform = `rotate(${tiltDirection * 10}deg)`;
                tiltDirection *= -1; // Reverse the tilt direction
            }

            frameCounter++;

            if (position > windowWidth) {
                position = -100;
            }

            requestAnimationFrame(moveWalker);
        }

        moveWalker();
