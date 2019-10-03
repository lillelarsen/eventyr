const { showPage, makeChoice } = require('../controllers/13.controller.js');

/**
 * @module route/13
 */

module.exports = function(app) {
        app.get('/13', showPage)
        app.post('/13', makeChoice)
};