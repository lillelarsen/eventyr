/**
 * @module controller/7
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
        content: 'Velkommen til Falafelgade, vælg dit næste træk.',
        choices: [
        {
            text: "Køre mod øst",
            action: "6"
        }, {
            text: "Køre mod nord",
            action: "21"
        },
        {
            text: "Køre mod syd",
            action: "8"
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot7'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "6") {
        res.redirect('/6');
    } else if (req.fields.action ==='21') {
        res.redirect('/21');
    } else if (req.fields.action ==='8') {
        res.redirect('/8');
    } else {
        res.redirect('/');
    }
}