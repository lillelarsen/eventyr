const { showPage, makeChoice } = require('../controllers/6.controller.js');

/**
 * @module route/6
 */

module.exports = function(app) {
        app.get('/6', showPage)
        app.post('/6', makeChoice)
};