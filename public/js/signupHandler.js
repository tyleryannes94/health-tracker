// Function to send signup request to the server
async function signupUser(firstName, lastName, email, password, goal, weight) {
    try {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ 
                first_name: firstName, 
                last_name: lastName, 
                email, 
                password, 
                health_goal: goal, 
                starting_weight: weight 
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            const userData = await response.json();
            return userData; // Return the user data
        } else {
            throw new Error('Failed to sign up. Please try again.');
        }
    } catch (error) {
        console.error('Sign up Error:', error);
        throw error;
    }
}

// Event listener for the signup form submission
document.querySelector('.signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Retrieve data from the form
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const goal = document.querySelector('#goal').value;
    const weight = document.querySelector('#weight').value.trim(); // Assuming weight is optional

    try {
        const userData = await signupUser(firstName, lastName, email, password, goal, weight);
        if (userData && userData.user && userData.user.id) {
            // Store the user ID in local storage for later use
            localStorage.setItem('userId', userData.user.id);
            // Redirect to the dashboard
            window.location.href = '/dashboard';
        } else {
            throw new Error('User data is incomplete.');
        }
    } catch (error) {
        // Handle signup errors (e.g., show a message to the user)
        alert('Signup failed: ' + error.message);
    }
});
