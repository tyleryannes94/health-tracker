document.addEventListener('DOMContentLoaded', () => { // fx will execute when DOM is fully loaded

    // event listener for workout-input-btn
    const workoutButton = document.querySelector('.workout-btn');
    workoutButton.addEventListener('click', () => {
        console.log('workout btn worked');
    });

    // event listener for progress-btn
    const progressButton = document.querySelector('.progress-btn');
    progressButton.addEventListener('click', () => {
        console.log('progress btn worked');
    });
    // event listener for history-btn
    const historyButton = document.querySelector('.history-btn');
    historyButton.addEventListener('click', () => {
        console.log('history btn worked');
    });
});

// TODO: FIX
