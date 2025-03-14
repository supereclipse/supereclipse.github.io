const radius = 185; // Set your desired radius
const totalImages = 6; // Total number of circle images
const circleImages = document.querySelectorAll('.circle-image');
const centerImage = document.querySelector('.center-image');

// Calculate the center position of the circle container
const centerX = centerImage.parentElement.offsetWidth / 2;
const centerY = centerImage.parentElement.offsetHeight / 2;

// Calculate the angle offset for the first image
const angleOffset = -Math.PI / 2; // Rotate 90 degrees counter-clockwise

// Position each circle image
circleImages.forEach((image, index) => {
    const angle = angleOffset + (index / totalImages) * (2 * Math.PI); // Adjust the angle for rotation
    const x = centerX + Math.cos(angle) * radius - (image.offsetWidth / 2); // Calculate x position
    const y = centerY + Math.sin(angle) * radius - (image.offsetHeight / 2); // Calculate y position

    // Set the position for each circle image
    image.style.transform = `translate(${x}px, ${y}px) rotate(${angle + Math.PI / 2}rad)`; // Rotate to keep the bottom facing down
});

document.querySelectorAll('.icon-container').forEach(iconContainer => {
    iconContainer.addEventListener('click', function() {
        const question = this.closest('.faq-question'); // Get the parent question element
        const answer = question.querySelector('.faq-answer'); // Get the answer element
        const icon = this.querySelector('.faq-icon'); // Get the icon element

        // Toggle answer display
        if (answer.classList.contains('show')) {
            answer.classList.remove('show'); // Hide the answer
            icon.src = "images/icon(+).svg"; // Change icon to +
        } else {
            answer.classList.add('show'); // Show the answer
            icon.src = "images/icon(-).svg"; // Change icon to −
        }
    });
});

function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
}


