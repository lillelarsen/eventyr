const { showPage, makeChoice } = require('../controllers/4.controller.js');

/**
 * @module route/4
 */

module.exports = function(app) {
        app.get('/4', showPage)
        app.post('/4', makeChoice)
};