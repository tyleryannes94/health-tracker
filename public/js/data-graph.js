// Fetch User Workout Data
async function fetchUserWorkouts() {
    try {
        const userId = localStorage.getItem('userId');
        if (!userId) throw new Error('User ID not found');

        const response = await fetch(`/api/workout/users/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch workouts');

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        // Handle the error appropriately
    }
}

// Process Data for Charts
async function processDataForCharts() {
    const workouts = await fetchUserWorkouts();

    const lineChartData = { labels: [], data: [] };
    const workoutTypeData = {};
    const moodData = {};

    workouts.forEach(workout => {
        // For Line Chart
        const date = new Date(workout.logged_date).toLocaleDateString();
        lineChartData.labels.push(date);
        lineChartData.data.push(workout.workout_length);

        // For Workout Type Pie Chart
        workoutTypeData[workout.workout_type] = (workoutTypeData[workout.workout_type] || 0) + 1;

        // For Mood Pie Chart
        moodData[workout.mood] = (moodData[workout.mood] || 0) + 1;
    });

    createLineChart(lineChartData);
    createPieChart(workoutTypeData, 'workoutTypeChart');
    createPieChart(moodData, 'moodChart');
}

// Create Line Chart
function createLineChart(data) {
    const ctx = document.getElementById('workoutLineChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Workout Length (Minutes)',
                data: data.data,
                backgroundColor: 'rgba(0, 123, 255, 0.5)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{ ticks: { beginAtZero: true } }]
            }
        }
    });
}

// Create Pie Chart
function createPieChart(data, canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: 'Distribution',
                data: Object.values(data),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        }
    });
}

// Initialize the Chart Generation Process
document.addEventListener('DOMContentLoaded', () => {
    processDataForCharts();
});
