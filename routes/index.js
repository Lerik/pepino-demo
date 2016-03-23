var express = require('express');
var pepino = require('pepino-lib');
var router = express.Router();

var sample = `I have navigated to the search screen
  Navigate to http://mysite.com

I search for "$SearchTerm"
  Type "$SearchTerm" into <#search> element
  Click the <#submit> button

I should find "$ExpectedResult" in the results
  Verify "$ExpectedResult" is in <#results> element`;
 
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Pepino Demo', pepinoLang: sample });
});

router.post('/', function(req, res, next) {
    var cucumberJs = pepino.convert(req.body.pepinoLang); 
    console.log(cucumberJs);
    res.render('index', { title: 'Pepino Demo', pepinoLang: sample, cucumberJs: cucumberJs });
});

module.exports = router;
