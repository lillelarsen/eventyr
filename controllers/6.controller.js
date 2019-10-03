/**
 * @module controller/6
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
        content: 'Velkommen til Gedestræde, vælg dit næste træk.',
        choices: [
        {
            text: "Køre mod vest",
            action: "7"
        }, {
            text: "Køre mod nord",
            action: "22"
        },
        {
            text: "Køre mod syd",
            action: "3"
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot6'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "7") {
        res.redirect('/7');
    } else if (req.fields.action ==='22') {
        res.redirect('/22');
    } else if (req.fields.action ==='3') {
        res.redirect('/3');
    } else {
        res.redirect('/');
    }
}