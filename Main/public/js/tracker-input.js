const workoutFormHandler = async (event) => {
    event.preventDefault();

    const workoutType = document.querySelector('#workout-type').value;
    const workoutTime = document.querySelector('#workout-time').value;
    const mood = document.querySelector('input[name="mood"]:checked').value;
    let currentWeight = document.querySelector('#current-weight').value;

    // Convert currentWeight to an integer if it's provided
    if (currentWeight) {
        currentWeight = parseInt(currentWeight);
    }

    // Prepare the data object with required fields
    let workoutData = {
        workout_type: workoutType,
        workout_length: workoutTime,
        mood: mood
    };

    // Include currentWeight only if it's provided and valid
    if (!isNaN(currentWeight)) {
        workoutData.new_weight = currentWeight;
    }

    try {
        const response = await fetch('/api/workout/tracker-input', {
            method: 'POST',
            body: JSON.stringify(workoutData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            alert('Workout and mood logged successfully!');
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log workout. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

document.querySelector('.tracker-form').addEventListener('submit', workoutFormHandler);
