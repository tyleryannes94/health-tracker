const loginFormHandler = async (event) => {
    event.preventDefault(); // prevents the default form submission behavior

    // collect info from login form 
    const email = document.querySelector('#email').ariaValueMax.trim();
    const password = document.querySelector('#password');

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },// not sure if needed
        });

        if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile'); // TODO: change '/profile' to '/profile.js' ?
        } else {
        alert(response.statusText);
        }
    }
    };

//TODO: update signupFormHandler function
//the following is a stand-in function based off mod 14 mini project
const signupFormHandler = async (event) => {
    event.preventDefault(); 
  
    // collect info from sign up form
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const healthGoal = document.querySelector('#health-goal-signup').value.trim();
    const currentWeight = document.querySelector('#current-weight-signup').value.trim();
  
    if (name && email && password) {
        // send POST request to API endpoint
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, healthGoal, currentWeight }),
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
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form') 
  .addEventListener('submit', signupFormHandler);