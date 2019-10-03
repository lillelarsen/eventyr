const { showPage, makeChoice } = require('../controllers/3.controller.js');

/**
 * @module route/3
 */

module.exports = function(app) {
        app.get('/3', showPage)
        app.post('/3', makeChoice)
};