const router = require('express').Router();

// Importing all route handlers
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// You can add other route handlers here as needed

// Setting up middleware to use these routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;