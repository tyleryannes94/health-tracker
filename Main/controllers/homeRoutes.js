const router = require('express').Router();
const { User, Mood, Workout } = require('../models');
const withAuth = require('../utils/auth');

// Route to render the homepage
router.get('/', async (req, res) => {
    try {
        // Additional logic can be added here if you want to display
        // specific content based on user login status or other criteria

        res.render('homepage', {
            // Include any data or flags you want to pass to the template
            logged_in: req.session.logged_in || false,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Route to render the login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect them to the dashboard
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

// Route to render the registration page
router.get('/register', (req, res) => {
    // If the user is already logged in, redirect them to the dashboard
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('register');
});

// Route to render the user dashboard - protected by withAuth
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Fetch user-specific data from the database
        // Example: const userData = await User.findByPk(req.session.user_id);

        res.render('dashboard', {
            // Include any user-specific data here
            logged_in: true,
            // user: userData.get({ plain: true }) // Example usage
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
