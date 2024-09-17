
const aboutBoutton = document.querySelector('.nav-link[href="#about"]');

aboutBoutton.addEventListener('click', function(event) {
    event.preventDefault(); // Removes default anchor link behavior (page jump)
    const aboutSection = document.getElementById('about');
    aboutSection.classList.remove('hidden');  // removes hidden class if present
});

// Optionally, add a hidden class to the about section initially
const aboutSection = document.getElementById('about');
aboutSection.classList.add('hidden'); // hide section initially