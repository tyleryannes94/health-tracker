const router = require('express').Router();
const { User, Mood, Workout } = require('../models');
const withAuth = require('../utils/auth');

// Redirect root route to dashboard
router.get('/', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
    } else {
        res.redirect('/login');
    }
});

// Route to render the login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

// Route to render the registration page
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup'); 
});

// Route to render the user dashboard - protected by withAuth
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        res.render('dashboard', {
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
        console.log ("Failed to render the dashboard page.")
    }
});

// sandbox routing for dashboard.js file to redirect to workout page etc
// Route for user profile data
router.get('/tracker-input', withAuth, async (req, res) => {
    try {
        res.render('tracker-input', {
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
        console.log("failed to load tracker page")
    }
    
});

module.exports = router;