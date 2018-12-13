var express = require('express')
var router = express.Router();


router.get('/', (req, res) => {
    res.redirect('/index')
})
//  主页输出 "Hello World"
router.get('/drag/:q', (req, res, next) => {
    var param = req.param('q')
    res.send( 'GET: drag element ' + param);
})

module.exports = router;