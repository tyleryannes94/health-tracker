// Function to send login request to the server
async function loginUser(email, password) {
    try {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            const userData = await response.json();
            return userData; // Return the user data
        } else {
            throw new Error('Failed to log in. Please check your credentials.');
        }
    } catch (error) {
        console.error('Login Error:', error);
        throw error; // Rethrow the error to be handled in the caller function
    }
}

// Event listener for the login form submission
document.querySelector('.login-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Retrieve email and password from the form
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    try {
        const userData = await loginUser(email, password);
        // Store the user ID in local storage for later use
        localStorage.setItem('userId', userData.user.id);

        // Redirect to the dashboard
        window.location.href = '/dashboard';
    } catch (error) {
        // Handle login errors (e.g., show a message to the user)
        alert('Login failed: ' + error.message);
    }
});
