const { showPage, makeChoice } = require('../controllers/7.controller.js');

/**
 * @module route/7
 */

module.exports = function(app) {
        app.get('/7', showPage)
        app.post('/7', makeChoice)
};