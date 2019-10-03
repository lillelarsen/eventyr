/**
 * @module controller/3
 */

/**
 * Denne funktion retunerer main.ejs med data
 * @params {Object} req
 * @params {Function} res
 * @params {Function} next
 */

exports.showPage = (req, res, next) => {
    req.session.test.s3 = true;
    console.log(req.session.test);
    
    if(req.session.packages !== 4) {
        req.session.packages = req.session.packages + 1;
    }
    
    res.render('main', { 
        title: 'Pakkeruten', 
        content: 'Chokolademesterens t-kryds.',
        choices: [
        {
            text: "Køre mod vest",
            action: "4"
        }, {
            text: "Køre mod nord",
            action: "6"
        },
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot3'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "4") {
        res.redirect('/4');
    } else if (req.fields.action ==='6') {
        res.redirect('/6');
    } else {
        res.redirect('/');
    }
}