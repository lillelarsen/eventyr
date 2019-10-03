/**
 * @module controller/23
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
        content: 'Velkommen til Flødbollevejen, vælg dit næste træk.',
        choices: [
        {
            text: "Køre mod vest",
            action: "22"
        }, {
            text: "Køre mod syd",
            action: "tillykke"
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot23'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "22") {
        res.redirect('/22');
    } else if (req.fields.action ==='tillykke') {
        res.redirect('/tillykke');
    } else {
        res.redirect('/');
    }
}