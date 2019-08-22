var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/static', require('./static'));
router.use('/etherscan', require('./etherscan'));
router.use('/eth', require('./ethproxy'));

module.exports = router;
