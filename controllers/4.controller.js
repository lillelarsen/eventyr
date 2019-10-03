/**
 * @module controller/4
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
        content: 'Du holder ved flammehavsgaden.',
        choices: [
        {
            text: "Køre mod øst",
            action: "3"
        }, {
            text: "Køre mod nord",
            action: "8"
        },
        {
            text: "Køre mod syd",
            action: "1"
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot4'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "3") {
        res.redirect('/3');
    } else if (req.fields.action ==='8') {
        res.redirect('/8');
    } else if (req.fields.action ==='1') {
        res.redirect('/1');
    } else {
        res.redirect('/');
    }
}