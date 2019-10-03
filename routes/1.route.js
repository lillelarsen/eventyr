const { showPage, makeChoice } = require('../controllers/1.controller.js');
const { busPopup, busFight } = require('../controllers/bus.controller');
/**
 * @module route/1
 */

module.exports = function(app) {
        app.get('/1', busPopup);
        app.post('/1', busFight);
        app.get('/1a', showPage);
        app.post('/1a', makeChoice);
};