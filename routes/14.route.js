const { showPage, makeChoice } = require('../controllers/14.controller.js');

/**
 * @module route/14
 */

module.exports = function(app) {
        app.get('/14', showPage)
        app.post('/14', makeChoice)
};