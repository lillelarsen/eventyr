const dice = require('../services/dice');

exports.busPopup = function(req, res, next) {
    res.render("bus", { health: req.session.health });
};


exports.busFight = function(req, res, next) {
    const result = dice();
    if(result > 2) {
        res.redirect(req.route.path + 'a');
    } else {
        req.session.health = req.session.health - 1;

        if(req.session.health === 0) {
            req.session.health = false;
            req.session.packages = false;
            res.render('gameover', {});
        } else {
            res.redirect(req.route.path);
        }
    }
};