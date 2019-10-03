const { showPage, makeChoice } = require('../controllers/8.controller.js');
const { busPopup, busFight } = require('../controllers/bus.controller');

/**
 * @module route/8
 */

module.exports = function(app) {
        app.get('/8', busPopup);
        app.post('/8', busFight);
        app.get('/8a', showPage)
        app.post('/8a', makeChoice)
};