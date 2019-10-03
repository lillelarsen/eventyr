/**
 * @module controller/9
 */

/**
 * Denne funktion retunerer main.ejs med data
 * @params {Object} req
 * @params {Function} res
 * @params {Function} next
 */

exports.showPage = (req, res, next) => {
    res.render('main', { 
        title: 'Pakkeruten', 
        content: 'Din kæde er knækket, du må tilbage og få repareret den.',
        choices: [
        {
            text: "Tilbage til centralen",
            action: ""
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot9'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "0") {
        res.redirect('/');
    } else {
        res.redirect('/');
    }
}