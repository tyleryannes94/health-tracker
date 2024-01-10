document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#history-table tbody');

    // Function to fetch workout history data
    const fetchWorkoutHistory = async () => {
        try {
            // Retrieve the user ID from local storage
            const userId = localStorage.getItem('userId');

            if (!userId) {
                throw new Error('User ID not found');
            }

            const response = await fetch(`/api/workout/users/${userId}`); // if users/ doesn't work, try user/

            if (!response.ok) {
                throw new Error('Failed to fetch workout history');
            }

            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error; // Propagate the error to be handled in the calling function
        }
    };

    // Function to populate the table with data
    const populateTable = (workoutHistory) => {
        if (workoutHistory.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5">No workout history found.</td></tr>';
            return;
        }

        workoutHistory.forEach(entry => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${new Date(entry.logged_date).toLocaleDateString()}</td>
                <td>${entry.workout_type}</td>
                <td>${entry.workout_length} minutes</td>
                <td>${entry.mood}</td>
                <td>${entry.new_weight ? entry.new_weight + ' lbs/kg' : 'N/A'}</td>
            `;
            tableBody.appendChild(row);
        });
    };

    // Fetch and display workout history
    fetchWorkoutHistory().then(workoutHistory => {
        populateTable(workoutHistory);
    }).catch(error => {
        console.error('Error fetching workout history:', error);
        tableBody.innerHTML = '<tr><td colspan="5">Error loading workout history.</td></tr>';
    });
});
