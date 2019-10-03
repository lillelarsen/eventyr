const { showPage, makeChoice } = require('../controllers/20.controller.js');

/**
 * @module route/20
 */

module.exports = function(app) {
        app.get('/20', showPage)
        app.post('/20', makeChoice)
};