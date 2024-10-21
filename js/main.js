// window.addEventListener('scroll', function() {
//     var navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// JavaScript for Dark Mode toggle
// Example: Toggle Dark Mode
// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
// }
// omar rs edit
// omr rs  edit 2asfdsdfsdfsf
// Example: Run this code when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const darkModeButton = document.querySelector('.btn-dark');
    if (darkModeButton) {
        darkModeButton.addEventListener('click', toggleDarkMode);
    }
    
    // Additional JavaScript functionality can be added here
    console.log("Basic JavaScript loaded on this page.");
});


    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
        
        // Optional: Store the user's preference in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    }

    // Check for the saved theme in localStorage and apply it
    window.onload = function() {
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
        }
    };



