'use strict';
const logger = require('../utils/logger');
const clublistStore = require('../models/playlist-store');
const uuid = require('uuid');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Playlist Dashboard',
      clublists: clublistStore.getAllClublists(),
    };
    logger.info('about to render', clublistStore.getAllClublists());
    response.render('dashboard', viewData);
  },
  deleteClub(request, response) {
    const clubId = request.params.id;
    logger.debug(`Deleting Club  ${clubId}`);
    clublistStore.removeClub(clubId);
    response.redirect('/dashboard');
  },
   addClublist(request, response) {
    const newClubList = {
      id: uuid(),
      title: request.body.title,
      players: [],
    };
    clublistStore.addClublist(newClubList);
    response.redirect('/dashboard');
  },
};

module.exports = dashboard;