/**
 * @module controller/15
 */

/**
 * Denne funktion retunerer main.ejs med data
 * @params {Object} req
 * @params {Function} res
 * @params {Function} next
 */

exports.showPage = (req, res, next) => {
    req.session.test.s15 = true;
    console.log(req.session.test);

    if(req.session.packages !== 4) {
        req.session.packages = req.session.packages + 1;
    }
    res.render('main', { 
        title: 'Pakkeruten', 
        content: 'Velkommen til Findholgerstræde, vælg dit næste træk..',
        choices: [
            {
                text: "Køre mod nord",
                action: "18"
            }, {
                text: "Køre mod syd",
                action: ""
            }, {
                text: "Køre mod øst",
                action: "12"
            }
            ],
            health: req.session.health,
            packages: req.session.test,
            position: 'spot15'        
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "18") {
        res.redirect('/18');
    } else if (req.fields.action ==='') {
        res.redirect('/');
    } else if (req.fields.action ==='12') {
        res.redirect('/12');
    } else {
        res.redirect('/');
    }
}