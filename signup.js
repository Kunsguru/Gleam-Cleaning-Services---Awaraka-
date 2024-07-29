document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.getElementById('signUpForm');
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Sign up successful!');
    });
});
