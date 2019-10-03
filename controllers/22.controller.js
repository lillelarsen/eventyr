/**
 * @module controller/22
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
        content: 'Velkommen til Hattestrædet, vælg dit næste træk.',
        choices: [
        {
            text: "Køre mod vest",
            action: "21"
        }, {
            text: "Køre mod syd",
            action: "6"
        }, {
            text: "Køre mod øst",
            action: "23"
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot22'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "21") {
        res.redirect('/21');
    } else if (req.fields.action ==='6') {
        res.redirect('/6');
    } else if (req.fields.action ==='23') {
        res.redirect('/23');
    } else {
        res.redirect('/');
    }
}