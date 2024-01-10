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
router.get('/dashboard', /*withAuth,*/ async (req, res) => {
    console.log("Dashboard route accessed");
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: ['first_name', 'last_name', 'email', 'health_goal', 'starting_weight']
        });

        if (!userData) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        // Convert Sequelize object to plain object
        const user = userData.get({ plain: true });

        // Log the user object to the console
        console.log("User data to be passed to the template:", user);

        res.render('dashboard', {
            firstName: user.first_name, // Assuming your database field is 'first_name'
            // Other data can be passed here as well
        });
    } catch (err) {
        res.status(500).json(err);
    }
});




// sandbox routing for dashboard.js file to redirect to workout page etc
// Route to render tracker-input page
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

// route to render data-graph page
router.get('/data-graph', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: ['first_name']
        });

        if (!userData) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const user = userData.get({ plain: true });

        res.render('data-graph', {
            logged_in: true,
            firstName: user.first_name
        });
    } catch (err) {
        res.status(500).json(err);
        console.log("failed to load data-graph page")
    }
});

// route to render history page
router.get('/history', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: ['first_name']
        });

        if (!userData) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        const user = userData.get({ plain: true });

        res.render('history', {
            logged_in: true,
            firstName: user.first_name
        });
    } catch (err) {
        res.status(500).json(err);
        console.log("failed to load history page")
    }
});


module.exports = router;