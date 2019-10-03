const { showPage, makeChoice } = require('../controllers/18.controller.js');

/**
 * @module route/18
 */

module.exports = function(app) {
        app.get('/18', showPage)
        app.post('/18', makeChoice)
};