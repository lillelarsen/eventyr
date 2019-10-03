/**
 * @module controller/start
 */

/**
 * Denne funktion retunerer main.ejs med data
 * @params {Object} req
 * @params {Function} res
 * @params {Function} next
 */

exports.start = (req, res, next) => {
    req.session.test = {
                's3': false,
                's10': false,
                's15': false,
                's21': false
        
    }

    if(!req.session.health && !req.session.packages) {
        req.session.health = 3;
        req.session.packages = 0;
    } 

    res.render('main', { 
        title: 'Pakkeruten', 
        content: 'Du står ved dit udgangspunkt, pakkecentralen på hovedvejen. Du skal nu samle 4 pakker ind og levere dem i den anden ende af byen, uden at blive kørt ned af bussen',
        choices: [
            {
                text: "Køre mod vest",
                action: "15"
            }, {
                text: "Køre mod øst",
                action: "1"
            },
        ],
        health: req.session.health,
        packages: req.session.test,
        position: 'you'        
    });
}

exports.makeChoice = function(req, res, next) {
    if (req.fields.action === "1") {
        res.redirect('/1');
    } else if (req.fields.action ==='15') {
        res.redirect('/15');
    } else {
        res.redirect('/');
    }
}