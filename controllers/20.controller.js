/**
 * @module controller/20
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
        content: 'Velkommen til Vinderstræde, vælg dit næste træk.',
        choices: [
        {
            text: "Køre mod vest",
            action: "18"
        }, {
            text: "Køre mod syd",
            action: "10"
        }, {
            text: "Køre mod øst",
            action: "21"
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot20'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "18") {
        res.redirect('/18');
    } else if (req.fields.action ==='10') {
        res.redirect('/10');
    } else if (req.fields.action ==='21') {
        res.redirect('/21');
    } else {
        res.redirect('/');
    }
}