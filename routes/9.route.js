const { showPage, makeChoice } = require('../controllers/9.controller.js');

/**
 * @module route/9
 */

module.exports = function(app) {
        app.get('/9', showPage)
        app.post('/9', makeChoice)
};