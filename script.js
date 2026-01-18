document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // This Prevent form submission



    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('error-message');

    if (password === confirmPassword) {
        errorMessage.textContent = ''; // Clear any previous error messages
        alert('Account created successfully!'); // Placeholder for successful submission
        // It submit the form 
    } else {
        errorMessage.textContent = 'Passwords do not match!';
    }
       
});
