const router = require('express').Router();
const {User, Workout} = require ('../../models');
const withAuth = require('../../utils/auth');
