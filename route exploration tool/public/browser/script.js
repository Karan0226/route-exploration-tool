// JavaScript code for handling login functionality
document.getElementById('guest-login').addEventListener('click', function() {
    fetch('/guest-login', {
        method: 'POST',
    })
    .then(response => {
        if (response.redirected) {
            window.location.href = response.url; // Redirect to the main page
        }
    })
    .catch(error => console.error('Error:', error));
});
