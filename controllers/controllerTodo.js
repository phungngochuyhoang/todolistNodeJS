
var bodyparser = require('body-parser');

var urlencodedparser = bodyparser.urlencoded({extended: false});

var tasks = [];

module.exports = function(app) {
    
    app.get('/todolist', function(req, res) {
        res.render('todolist', {datas: tasks});
    })

    app.post('/todolist', urlencodedparser, function(req, res) {
        tasks.push(req.body);
        res.json(tasks);
    })  

    app.get('/todolist/api', function(req, res) {
        res.send(tasks);
    })

    app.delete('/todolist/:task', function(req, res) {
        var indexTemps = -1;
        tasks.forEach((item, index) => {
            if (item.task === req.params.task) indexTemps = index;
        })
        tasks.splice(indexTemps, 1);
        res.json(tasks);
    })
}