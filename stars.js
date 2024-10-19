// JavaScript to generate random stardust particles
document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.getElementById('stars');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        
        let xPos = Math.random() * window.innerWidth;
        let yPos = Math.random() * window.innerHeight;

        star.style.left = `${xPos}px`;
        star.style.top = `${yPos}px`;

        starsContainer.appendChild(star);
    }
});
