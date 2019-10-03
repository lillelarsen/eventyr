const { showPage, makeChoice } = require('../controllers/12.controller.js');

/**
 * @module route/12
 */

module.exports = function(app) {
        app.get('/12', showPage)
        app.post('/12', makeChoice)
};