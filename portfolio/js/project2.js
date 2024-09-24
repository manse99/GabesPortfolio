

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Select the button element for "Project 2"
    const project2Button = document.querySelector('.project-card .btn-secondary');

    // Define the URL of your GitHub repository for "Project 2"
    const project2RepoUrl = 'https://reposfit.netlify.app-';

    // Set the href attribute of the button to the GitHub repository URL
    project2Button.setAttribute('href', project2RepoUrl);

    // Optional: Open the link in a new tab
    project2Button.setAttribute('target', '_blank');
});
