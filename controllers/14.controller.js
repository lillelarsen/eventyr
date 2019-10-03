/**
 * @module controller/14
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
        content: 'Du er punkteret, du må tilbage og få repareret cyklen.',
        choices: [
        {
            text: "Tilbage til centralen",
            action: ""
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot14'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "0") {
        res.redirect('/');
    } else {
        res.redirect('/');
    }
}