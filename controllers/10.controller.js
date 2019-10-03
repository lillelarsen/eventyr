/**
 * @module controller/10
 */

/**
 * Denne funktion retunerer main.ejs med data
 * @params {Object} req
 * @params {Function} res
 * @params {Function} next
 */

exports.showPage = (req, res, next) => {
    req.session.test.s10 = true;

    console.log(req.session.test);

    if(req.session.packages !== 4) {
        req.session.packages = req.session.packages + 1;
    }
    res.render('main', { 
        title: 'Pakkeruten', 
        content: 'Velkommen til Centrum, vælg dit næste træk.',
        choices: [
        {
            text: "Køre mod øst",
            action: "8"
        }, {
            text: "Køre mod nord",
            action: "20"
        },
        {
            text: "Køre mod syd",
            action: "12"
        },
        {
            text: "Køre mod vest",
            action: "18"
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot10'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "8") {
        res.redirect('/8');
    } else if (req.fields.action ==='20') {
        res.redirect('/20');
    } else if (req.fields.action ==='12') {
        res.redirect('/12');
    } else if (req.fields.action ==='18') {
        res.redirect('/18');
    } else {
        res.redirect('/');
    }
}