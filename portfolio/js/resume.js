document.addEventListener('DOMContentLoaded', function() {
    // Get the resume link element
    const resumeLink = document.querySelector('a.nav-link[href="#Resume"]');

    // Add a click event listener to the resume link
    resumeLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link

        // Open the resume in a new tab
        window.open('../resume/GCRes 9.0.docx', '_blank');
    });
});
