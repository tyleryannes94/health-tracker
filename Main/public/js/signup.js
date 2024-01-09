const signupFormHandler = async (event) => {
  event.preventDefault(); 

  const firstName = document.querySelector('#first-name').value.trim();
  const lastName = document.querySelector('#last-name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const healthGoal = document.querySelector('#goal').value.trim();
  const currentWeight = document.querySelector('#weight').value.trim();
console.log(password)
  if (firstName && lastName && email && password) {
      const response = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify({ 
              "first_name": firstName, 
              "last_name": lastName, 
              "email": email, 
              "password": password, // Changed from "password" to "pass" to match the User model
              "health_goal": healthGoal, 
              "starting_weight": currentWeight 
          }),
          headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        // if successful, redirect browser to profile page
          document.location.replace('/dashboard');
      } else {      
          console.log(await response.json());
          alert(response.statusText);
      }
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
