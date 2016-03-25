var express = require('express');
var pepino = require('pepino-lib');
var router = express.Router();
var pkg = require('pepino-lib/package.json');

var sample = `I have navigated to the search screen
  Navigate to http://mysite.com

I search for "$SearchTerm"
  Type "$SearchTerm" into <#search> element
  Click the <#submit> button

I should find "$ExpectedResult" in the results
  Verify "$ExpectedResult" is in <#results> element`;
 
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Pepino Demo', pepinoLang: sample, version: pkg.version });
});

router.post('/', function(req, res, next) {
    var pepinoLang = req.body.pepinoLang;
    var cucumberJs = pepino.convert(pepinoLang); 
    console.log(cucumberJs);
    res.render('index', { title: 'Pepino Demo', pepinoLang: pepinoLang || sample, cucumberJs: cucumberJs, version: pkg.version });
});

module.exports = router;
