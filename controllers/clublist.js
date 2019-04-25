'use strict';

const logger = require('../utils/logger');
const clubliststore = require('../models/playlist-store');
    const uuid = require('uuid');


const clublist = {
  index(request, response) {
    const clublistid = request.params.id;
    logger.debug('ClubList id = ', clublistid);
    const viewData = {
      title: 'Club List',
      clublist: clubliststore.getClublist(clublistid),
    };
    response.render('clublist', viewData);
  },
  deletePlayer(request, response) {
    const playlistId = request.params.id;
    const playerId = request.params.playerId;
    logger.debug(`Deleting Player ${playerId} from Playlist ${playlistId}`);
    clubliststore.removePlayer(playlistId, playerId);
    response.redirect('/clublist/' + playlistId);
  },
    addPlayer(request, response) {
    const clublistId = request.params.id;
    const clublist = clubliststore.getClublist(clublistId);
    const newPlayer = {
      id: uuid(),
      title: request.body.title,
      position: request.body.position,
    };
    clubliststore.addPlayer(clublistId, newPlayer);
    response.redirect('/clublist/' + clublistId);
  

  },
  
};

module.exports = clublist;