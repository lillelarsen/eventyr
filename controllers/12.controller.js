/**
 * @module controller/12
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
        content: 'Velkommen til firanglen, vælg dit næste træk.',
        choices: [
       {
            text: "Køre mod vest",
            action: "15"
        }, {
            text: "Køre mod øst",
            action: "10"
        }, {
            text: "Køre mod nord",
            action: "13"
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot12'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "15") {
        res.redirect('/15');
    } else if (req.fields.action ==='13') {
        res.redirect('/13');
    } else if (req.fields.action ==='10') {
        res.redirect('/10');
    } else {
        res.redirect('/');
    }
}