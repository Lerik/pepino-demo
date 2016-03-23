"use strict";
const chai = require("chai");
var expect = chai.expect;
const NavigateStrategy_1 = require("./NavigateStrategy");
describe("when converting pepino-lang instructions to navigate to a url", () => {
    var strategy = new NavigateStrategy_1.NavigateStrategy();
    var text = "Navigate to http://mysite.com";
    it("should be able to generate for navigation instructions", () => {
        expect(strategy.canGenerate(text)).to.be.true;
    });
    it("should pass on unrecognized instructions", () => {
        expect(strategy.canGenerate("unrecognized instructions")).to.be.false;
    });
    it("should convert the step to cucumberjs code", () => {
        expect(strategy.generate(text)).to.equal("this.browser.url(\"http://mysite.com\");");
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9jb2RlR2VuZXJhdGlvblN0cmF0ZWdpZXMvTmF2aWdhdGVTdHJhdGVneS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE1BQU8sSUFBSSxXQUFXLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFFekIsbUNBQStCLG9CQUFvQixDQUFDLENBQUE7QUFFcEQsUUFBUSxDQUFDLCtEQUErRCxFQUFFO0lBRXRFLElBQUksUUFBUSxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztJQUN0QyxJQUFJLElBQUksR0FBRywrQkFBK0IsQ0FBQztJQUUzQyxFQUFFLENBQUMsd0RBQXdELEVBQUU7UUFDekQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNsRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtRQUMzQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDMUUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNENBQTRDLEVBQUU7UUFDN0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUE7SUFDeEYsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJkb21haW4vY29kZUdlbmVyYXRpb25TdHJhdGVnaWVzL05hdmlnYXRlU3RyYXRlZ3kuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
