var express = require('express');
var pepino = require('pepino-lib');
var router = express.Router();
var pkg = require('pepino-lib/package.json');

var sample = `I visit the API page
    Navigate to "http://webdriver.io"
    Click <=API>

I search for "$searchText"
    Type "$searchText" into <input[name='search']>

I should find "$text" in the results
    Verify "$text" is in an <a> element

I visit "$url"
    Navigate to "$url"

I select "$optionLabel" from "$selectElement"
    Select option named "$optionLabel" from <$selectElement>

the value of "$selectElement" should be "$elementValue"
    Verify the value "$elementValue" is selected in <$selectElement>

the selected option of "$selectElement" should be "$elementValue"
    Verify "$elementValue" is selected in <$selectElement>`;

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
