/**
 * @module controller/end
 */

/**
 * Denne funktion retunerer main.ejs med data
 * @params {Object} req
 * @params {Function} res
 * @params {Function} next
 */

exports.start = (req, res, next) => {
    if(req.headers.referer == "http://localhost:3000/23") {
        if(req.session.packages == 4) {
            res.render('main', { 
                title: 'Pakkeruten', 
                content: 'TILLYKKE, du fik leveret pakken sikkert.',
                choices: [
                {
                    text: "Tag hjem til centralen",
                    action: ""
                }
                ],
                health: req.session.health,
                packages: req.session.packages,
                position: 'end'
            });
        } else {
            res.render('main', { 
                title: 'Pakkeruten', 
                content: 'Du fejlede, du fik ikke leveret alle pakkerne.',
                choices: [
                {
                    text: "Start forfra",
                    action: "forfra"
                }
                ],
                health: req.session.health,
                packages: req.session.test,
                position: 'end'
            });
        }
    } else {
        res.redirect('/');
    }
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "forfra") {
        req.session.health = false;
        req.session.test = false;
        res.redirect('/');
    } else {
        req.session.health = false;
        req.session.test = false;
        res.redirect('/');
    }
}
