const { showPage, makeChoice } = require('../controllers/10.controller.js');
const { busPopup, busFight } = require('../controllers/bus.controller');

/**
 * @module route/10
 */

module.exports = function(app) {
        app.get('/10', busPopup);
        app.post('/10', busFight);
        app.get('/10a', showPage)
        app.post('/10a', makeChoice)
};