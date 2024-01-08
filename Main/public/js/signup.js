const signupFormHandler = async (event) => {
    event.preventDefault(); 
  
    // collect info from sign up form
    const firstName = document.querySelector('#first-name').value.trim();
    const lastName = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const healthGoal = document.querySelector('#goal').value.trim();
    const currentWeight = document.querySelector('#weight').value.trim();
  
    if (firstName && lastName && email && password) {
        // send POST request to API endpoint
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, email, password, healthGoal, currentWeight }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // if successful, redirect browser to profile page
        document.location.replace('/profile'); // TODO: change '/profile' to '/profile.js' ?
      } else {
        alert(response.statusText);
      }
    }
};

document
  .querySelector('.signup-form') 
  .addEventListener('submit', signupFormHandler);