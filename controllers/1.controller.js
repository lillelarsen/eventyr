/**
 * @module controller/1
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
        content: 'Du kommer til frelsens hærs skillevej.',
        choices: [
        {
            text: "Køre mod øst",
            action: "3"
        }, {
            text: "Køre mod nord",
            action: "4"
        }, {
            text: "Køre mod vest",
            action: ""
        }
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'spot1'
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "3") {
        res.redirect('/3');
    } else if (req.fields.action ==='4') {
        res.redirect('/4');
    }else if (req.fields.action ==='') {
        res.redirect('/');
    } else {
        res.redirect('/');
    }
}