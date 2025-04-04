// main.js
// Add smooth scrolling for nav links\

const video = document.querySelector('.video-container video');
document.addEventListener('DOMContentLoaded', function() { // Wait for DOM to load
    video.play().catch(error => {
        console.error("Autoplay prevented:", error);
        // Show a play button or other fallback
        const playButton = document.createElement('button');
        playButton.textContent = 'Play Video';
        playButton.addEventListener('click', () => {
           video.play();
        });
        document.querySelector('.video-container').appendChild(playButton);

    });
});
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function changeImage(imageSrc, text) {
  const mainImage = document.getElementById('mainImage');
  const itemText = document.querySelector('.title');
  
  mainImage.src = imageSrc;
  itemText.innerText = text; // Update title with the clicked item's description
}