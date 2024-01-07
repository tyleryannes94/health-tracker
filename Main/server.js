// Express middleware
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
require('dotenv').config();

// Sequelize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
const sess = {
  secret: process.env.SESSION_SECRET, // Using secret from .env file
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Use session middleware
app.use(session(sess));

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars setup
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Routes
app.use(routes);

// Sync Sequelize models and then start Express app
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}!`));
});
