/**
 * @module controller/8
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
        content: 'Velkommen til Gummiandskrydset, vælg dit næste træk.',
        choices: [
        {
            text: "Køre mod øst",
            action: "9"
        }, {
            text: "Køre mod nord",
            action: "7"
        },
        {
            text: "Køre mod syd",
            action: "4"
        },
        {
            text: "Køre mod vest",
            action: "10"
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot8'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "9") {
        res.redirect('/9');
    } else if (req.fields.action ==='7') {
        res.redirect('/7');
    } else if (req.fields.action ==='4') {
        res.redirect('/4');
    } else if (req.fields.action ==='10') {
        res.redirect('/10');
    } else {
        res.redirect('/');
    }
}