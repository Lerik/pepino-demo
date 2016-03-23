"use strict";
const chai = require("chai");
var expect = chai.expect;
const JasmineExpectStrategy_1 = require("./JasmineExpectStrategy");
describe("when converting pepino-lang instructions to a jasmine-style expect assertion", () => {
    describe("without variables", () => {
        var strategy = new JasmineExpectStrategy_1.JasmineExpectStrategy();
        var instructions = "Verify \"something\" is in <#results> element";
        it("should be able to generate typing instructions", () => {
            expect(strategy.canGenerate(instructions)).to.be.true;
        });
        it("should pass on unrecognized instructions", () => {
            expect(strategy.canGenerate("unrecognized instructions")).to.be.false;
        });
        it("should pass on unrecognized instructions", () => {
            var similar_instructions = "Verify \"something\" is not in <#results> element";
            expect(strategy.canGenerate(similar_instructions)).to.be.false;
        });
        it("should convert the assert to jasmine expect code", () => {
            expect(strategy.generate(instructions))
                .to.equal("expect(browser.getText(\"#results\").join()).toContain(\"something\");");
        });
    });
    describe("with variables", () => {
        var strategy = new JasmineExpectStrategy_1.JasmineExpectStrategy();
        var instructions = "Verify \"$someString\" is in <#results> element";
        it("should convert the assert to jasmine expect code with correct variable name", () => {
            expect(strategy.generate(instructions))
                .to.equal("expect(browser.getText(\"#results\").join()).toContain(someString);");
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9qYXNtaW5lRXhwZWN0Q29kZUdlbmVyYXRpb24vSmFzbWluZUV4cGVjdFN0cmF0ZWd5LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUV6Qix3Q0FBb0MseUJBQXlCLENBQUMsQ0FBQTtBQUU5RCxRQUFRLENBQUMsOEVBQThFLEVBQUU7SUFFckYsUUFBUSxDQUFDLG1CQUFtQixFQUFFO1FBQzFCLElBQUksUUFBUSxHQUFHLElBQUksNkNBQXFCLEVBQUUsQ0FBQztRQUMzQyxJQUFJLFlBQVksR0FBRywrQ0FBK0MsQ0FBQztRQUVuRSxFQUFFLENBQUMsZ0RBQWdELEVBQUU7WUFDakQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRTtZQUMzQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDMUUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsMENBQTBDLEVBQUU7WUFDM0MsSUFBSSxvQkFBb0IsR0FBRyxtREFBbUQsQ0FBQztZQUMvRSxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsa0RBQWtELEVBQUU7WUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ2xDLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztRQUM1RixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGdCQUFnQixFQUFFO1FBQ3ZCLElBQUksUUFBUSxHQUFHLElBQUksNkNBQXFCLEVBQUUsQ0FBQztRQUMzQyxJQUFJLFlBQVksR0FBRyxpREFBaUQsQ0FBQztRQUVyRSxFQUFFLENBQUMsNkVBQTZFLEVBQUU7WUFDOUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ2xDLEVBQUUsQ0FBQyxLQUFLLENBQUMscUVBQXFFLENBQUMsQ0FBQztRQUN6RixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZG9tYWluL2phc21pbmVFeHBlY3RDb2RlR2VuZXJhdGlvbi9KYXNtaW5lRXhwZWN0U3RyYXRlZ3kuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
