/**
 * @module controller/13
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
        content: 'Velkommen til Hulahopvænget, vælg dit næste træk.',
        choices: [
       {
            text: "Køre mod syd",
            action: "12"
        }, {
            text: "Køre mod øst",
            action: "14"
        }, {
            text: "Køre mod nord",
            action: "18"
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot13'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "12") {
        res.redirect('/12');
    } else if (req.fields.action ==='14') {
        res.redirect('/14');
    } else if (req.fields.action ==='18') {
        res.redirect('/18');
    } else {
        res.redirect('/');
    }
}