"use strict";
const chai = require("chai");
var expect = chai.expect;
const TypeTextWithoutElementStrategy_1 = require("./TypeTextWithoutElementStrategy");
describe("when converting pepino-lang instructions to type text with no target element", () => {
    var strategy = new TypeTextWithoutElementStrategy_1.TypeTextWithoutElementStrategy();
    var instructions = "Type \"some text\"";
    it("should be able to generate typing instructions", () => {
        expect(strategy.canGenerate(instructions)).to.be.true;
    });
    it("should pass on unrecognized instructions", () => {
        expect(strategy.canGenerate("unrecognized instructions")).to.be.false;
    });
    it("should pass on instructions including element", () => {
        expect(strategy.canGenerate("Type \"some text\" into <#element>")).to.be.false;
    });
    it("should convert the step to cucumberjs code", () => {
        expect(strategy.generate(instructions)).to.equal("this.browser.keys(\"some text\");");
    });
    describe("with variable", () => {
        var strategy = new TypeTextWithoutElementStrategy_1.TypeTextWithoutElementStrategy();
        var instructions = "Type \"$someText\"";
        it("should convert the step to cucumberjs code", () => {
            expect(strategy.generate(instructions))
                .to.equal("this.browser.keys(someText);");
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9jb2RlR2VuZXJhdGlvblN0cmF0ZWdpZXMvVHlwZVRleHRXaXRob3V0RWxlbWVudFN0cmF0ZWd5LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixpREFBNkMsa0NBQWtDLENBQUMsQ0FBQTtBQUVoRixRQUFRLENBQUMsOEVBQThFLEVBQUU7SUFFckYsSUFBSSxRQUFRLEdBQUcsSUFBSSwrREFBOEIsRUFBRSxDQUFDO0lBQ3BELElBQUksWUFBWSxHQUFHLG9CQUFvQixDQUFDO0lBRXhDLEVBQUUsQ0FBQyxnREFBZ0QsRUFBRTtRQUNqRCxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQzFELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDBDQUEwQyxFQUFFO1FBQzNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUMxRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrQ0FBK0MsRUFBRTtRQUNoRCxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDbkYsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNENBQTRDLEVBQUU7UUFDN0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDMUYsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsZUFBZSxFQUFFO1FBRXRCLElBQUksUUFBUSxHQUFHLElBQUksK0RBQThCLEVBQUUsQ0FBQztRQUNwRCxJQUFJLFlBQVksR0FBRyxvQkFBb0IsQ0FBQztRQUV4QyxFQUFFLENBQUMsNENBQTRDLEVBQUU7WUFDN0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ2xDLEVBQUUsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZG9tYWluL2NvZGVHZW5lcmF0aW9uU3RyYXRlZ2llcy9UeXBlVGV4dFdpdGhvdXRFbGVtZW50U3RyYXRlZ3kuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
