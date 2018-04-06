var express = require('express');
var router = express.Router();
//引入数据库包
var db = require("./db.js");

/* GET  listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/**
 * 查询列表页
 */
router.get('/', function (req, res, next) {
    db.query('select * from content', function (err, rows) {
        console.log(rows);
        if (err) {
            res.render('content', {title: '留言板', datas: []});  // this renders "views/persons.html"
        } else {

            res.render('content', {title: '留言板', datas: rows});
        }
    })
});


router.get('/add', function (req, res) {
    res.render('add');
});

router.post('/add', function (req, res) {
    console.log('hello');
    var content = req.body.content;
    console.log(content);
    console.log('123');
    
    db.query("insert into content(content) values('" + content + "')", function (err, rows) {
        if (err) {
            res.end('66666999：' + err);
        } else {
            res.redirect('/content');
        }
    })
    console.log('world');
});


module.exports = router;

