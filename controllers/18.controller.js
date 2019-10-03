/**
 * @module controller/18
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
        content: 'Velkommen til Tabergade, vælg dit næste træk.',
        choices: [
        {
            text: "Køre mod vest",
            action: "15"
        }, {
            text: "Køre mod syd",
            action: "13"
        }, {
            text: "Køre mod øst",
            action: "10"
        }, {
            text: "Køre mod nord",
            action: "20"
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot18'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "15") {
        res.redirect('/15');
    } else if (req.fields.action ==='13') {
        res.redirect('/13');
    } else if (req.fields.action ==='10') {
        res.redirect('/10');
    } else if (req.fields.action ==='20') {
        res.redirect('/20');
    } else {
        res.redirect('/');
    }
}