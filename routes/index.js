var express = require('express');
var router = express.Router();

/* GET home page. */

/* GET  */
/* home  */
/* For hw */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'AAAAAAA NEW TITLE AAAAAAA' });
});

module.exports = router;
