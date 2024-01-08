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
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ 
            "first_name": firstName, 
            "last_name": lastName, 
            "email": email, 
            "pass": password, 
            "health_goal": healthGoal, 
            "starting_weight": currentWeight }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // if successful, redirect browser to profile page
        document.location.replace('/profile'); // TODO: change '/profile' to '/profile.js' ?
      } else {      
        console.log(await response.json());
        alert(response.statusText);
      }
    }
};

document
  .querySelector('.signup-form') 
  .addEventListener('submit', signupFormHandler);