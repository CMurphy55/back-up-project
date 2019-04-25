'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const teamrankings = require('./controllers/team-rankings.js');
const clublist = require('./controllers/clublist.js');

const about = require('./controllers/about.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/rankings', teamrankings.index);
router.get('/about', about.index);
router.get('/clublist/:id', clublist.index);
router.get('/clublist/:id/deletePlayer/:playerId', clublist.deletePlayer);
router.get('/dashboard/deleteClub/:id', dashboard.deleteClub);
router.post('/clublist/:id/addclub',clublist.addPlayer);
router.post('/dashboard/addclub',dashboard.addClublist);


module.exports = router;
