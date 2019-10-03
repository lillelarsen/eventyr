/**
 * @module controller/21
 */

/**
 * Denne funktion retunerer main.ejs med data
 * @params {Object} req
 * @params {Function} res
 * @params {Function} next
 */

exports.showPage = (req, res, next) => {
    req.session.test.s21 = true;
    console.log(req.session);

    if(req.session.packages !== 4) {
        req.session.packages = req.session.packages + 1;
    }
    res.render('main', { 
        title: 'Pakkeruten', 
        content: 'Velkommen til Flippervej, vælg dit næste træk.',
        choices: [
        {
            text: "Køre mod vest",
            action: "20"
        }, {
            text: "Køre mod syd",
            action: "7"
        }, {
            text: "Køre mod øst",
            action: "22"
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot21'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "20") {
        res.redirect('/20');
    } else if (req.fields.action ==='7') {
        res.redirect('/7');
    } else if (req.fields.action ==='22') {
        res.redirect('/22');
    } else {
        res.redirect('/');
    }
}