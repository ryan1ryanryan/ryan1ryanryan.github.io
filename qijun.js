 const walker = document.getElementById('walker');
        let position = -100;
        const windowWidth = window.innerWidth;
        
        function moveWalker() {
            position += 5;
            walker.style.left = position + 'px';

            if (position > windowWidth) {
                position = -100;
            }
            
            requestAnimationFrame(moveWalker);
        }

        moveWalker();
