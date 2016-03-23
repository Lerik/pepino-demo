"use strict";
const chai = require("chai");
var expect = chai.expect;
const TypeTextWithElementStrategy_1 = require("./TypeTextWithElementStrategy");
describe("when converting pepino-lang instructions to type text with no target element", () => {
    describe("without variable", () => {
        var strategy = new TypeTextWithElementStrategy_1.TypeTextWithElementStrategy();
        var instructions = "Type \"some text\" into <#element>";
        it("should be able to generate typing instructions", () => {
            expect(strategy.canGenerate(instructions)).to.be.true;
        });
        it("should pass on unrecognized instructions", () => {
            expect(strategy.canGenerate("unrecognized instructions")).to.be.false;
        });
        it("should convert the step to cucumberjs code", () => {
            expect(strategy.generate(instructions))
                .to.equal("this.browser.setValue(\"#element\", \"some text\");");
        });
    });
    describe("with variable", () => {
        var strategy = new TypeTextWithElementStrategy_1.TypeTextWithElementStrategy();
        var instructions = "Type \"$someText\" into <#element>";
        it("should convert the step to cucumberjs code", () => {
            expect(strategy.generate(instructions))
                .to.equal("this.browser.setValue(\"#element\", someText);");
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9jb2RlR2VuZXJhdGlvblN0cmF0ZWdpZXMvVHlwZVRleHRXaXRoRWxlbWVudFN0cmF0ZWd5LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUV6Qiw4Q0FBMEMsK0JBQStCLENBQUMsQ0FBQTtBQUUxRSxRQUFRLENBQUMsOEVBQThFLEVBQUU7SUFFckYsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1FBRXpCLElBQUksUUFBUSxHQUFHLElBQUkseURBQTJCLEVBQUUsQ0FBQztRQUNqRCxJQUFJLFlBQVksR0FBRyxvQ0FBb0MsQ0FBQztRQUV4RCxFQUFFLENBQUMsZ0RBQWdELEVBQUU7WUFDakQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtZQUMzQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDMUUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsNENBQTRDLEVBQUU7WUFDN0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ2xDLEVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGVBQWUsRUFBRTtRQUV0QixJQUFJLFFBQVEsR0FBRyxJQUFJLHlEQUEyQixFQUFFLENBQUM7UUFDakQsSUFBSSxZQUFZLEdBQUcsb0NBQW9DLENBQUM7UUFFeEQsRUFBRSxDQUFDLDRDQUE0QyxFQUFFO1lBQzdDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNsQyxFQUFFLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImRvbWFpbi9jb2RlR2VuZXJhdGlvblN0cmF0ZWdpZXMvVHlwZVRleHRXaXRoRWxlbWVudFN0cmF0ZWd5LnNwZWMuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
