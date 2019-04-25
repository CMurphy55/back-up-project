'use strict';
const logger = require('../utils/logger');
const teamRankingsCollection = require('../models/team-rankings.json').teamRankingsCollection;

const teamRankings = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Teams',
      TeamRankings: teamRankingsCollection,
    };
    logger.info('about to render', teamRankingsCollection);
    response.render('teamranks', viewData);
  },
};
module.exports = teamRankings