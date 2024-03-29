const loginFormHandler = async (event) => {
    event.preventDefault(); // prevents the default form submission behavior

    // collect info from login form 
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value;

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard'); // for some reason this was still /profile instead of /dashboard
        } else {
        alert(response.statusText);
        }
    }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);