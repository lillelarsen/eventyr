const { showPage, makeChoice } = require('../controllers/23.controller.js');

/**
 * @module route/23
 */

module.exports = function(app) {
        app.get('/23', showPage)
        app.post('/23', makeChoice)
};