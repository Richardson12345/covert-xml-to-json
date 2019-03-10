var express = require('express');
var router = express.Router();
let ConverterClass = require('../controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mr Robot' });
});

router.post('/convert', ConverterClass.convert)

module.exports = router;
