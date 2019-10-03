const { showPage, makeChoice } = require('../controllers/21.controller.js');
const { busPopup, busFight } = require('../controllers/bus.controller');

/**
 * @module route/21
 */

module.exports = function(app) {
        app.get('/21', busPopup);
        app.post('/21', busFight);
        app.get('/21a', showPage)
        app.post('/21a', makeChoice)
};