const { start, makeChoice } = require('../controllers/end.controller.js');

/**
 * @module route/end
 */

module.exports = function(app) {
        app.get('/tillykke', start);
        app.post('/tillykke', makeChoice)
}