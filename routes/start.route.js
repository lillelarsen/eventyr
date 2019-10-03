const { start, makeChoice } = require('../controllers/start.controller.js');

/**
 * @module route/start
 */

module.exports = function(app) {
        app.get('/', start);
        app.post('/', makeChoice)
}