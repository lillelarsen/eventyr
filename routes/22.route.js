const { showPage, makeChoice } = require('../controllers/22.controller.js');

/**
 * @module route/22
 */

module.exports = function(app) {
        app.get('/22', showPage)
        app.post('/22', makeChoice)
};