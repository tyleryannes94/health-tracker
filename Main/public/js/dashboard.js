// create callback fx for workout button
const workoutButtonHandler = async (event) => {
    if (event.target.classList.contains('workout-input-btn')) {
        // redirect user to tracker-input.js page
        // window.location.assign('../views/tracker-input.handlebars');
        ('/controllers/tracker-input')
    }
};

// // create callback fx for progress button
// const progressButtonHandler = async (event) => {
//     // redirect user to data-graph.js page
//     if (event.target.classList.contains('progress-btn')) {
//         // redirect user to tracker-input.js page
//         document.location.replace('../views/data-graph.handlebars');
//     }
// };
// // create callback fx for history button
// const historyButtonHandler = async (event) => {
//     // redirect user to history.js page
//     if (event.target.classList.contains('history-btn')) {
//         // redirect user to tracker-input.js page
//         document.location.replace('../views/tracker-input.handlebars');
//     }
// };

// // TODO: create callback fx for logout button
// const logoutButtonHandler = async (event) => {
//     // redirect user to logout.js page
// };


document 
  .querySelector('.workout-input-btn')
  .addEventListener('click', workoutButtonHandler);

// document
//   .querySelector('.progress-btn')
//   .addEventListener('click', progressButtonHandler);

// document
//   .querySelector('.history-btn')
//   .addEventListener('click', historyButtonHandler);

// document
//   .querySelector('.button') //can we change class name?
//   .addEventListener('click', logoutButtonHandler);