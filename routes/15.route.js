const { showPage, makeChoice } = require('../controllers/15.controller.js');
const { busPopup, busFight } = require('../controllers/bus.controller');

/**
 * @module route/15
 */

module.exports = function(app) {
        app.get('/15', busPopup);
        app.post('/15', busFight);
        app.get('/15a', showPage)
        app.post('/15a', makeChoice)
};