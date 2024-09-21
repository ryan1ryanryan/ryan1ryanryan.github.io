       const walker = document.getElementById('walker');
        let position = -100;
        let tiltDirection = 1;
        const windowWidth = window.innerWidth;
        
        function moveWalker() {
            position += 5;
            walker.style.left = position + 'px';

            walker.style.transform = `rotate(${tiltDirection * 10}deg)`; // Tilt left and right by 10 degrees
            tiltDirection *= -1; // Reverse the tilt direction each step

            if (position > windowWidth) {
                position = -100;
            }
            
            requestAnimationFrame(moveWalker);
        }

        moveWalker();
