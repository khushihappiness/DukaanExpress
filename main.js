// script.js

// Example: Smooth Scroll on clicking "Register" button
document.querySelector('.register-button').addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href="signing.html";
});

document.querySelector('.search-bar input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        alert(`Searching for: ${e.target.value}`);
    }
});
