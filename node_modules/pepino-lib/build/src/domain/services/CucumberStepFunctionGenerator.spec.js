"use strict";
const chai = require("chai");
var expect = chai.expect;
const Step_1 = require("../../domain/Step");
const PepinoModule = require("../../domain/services/CucumberStepFunctionGenerator");
const MockStrategy_1 = require("./fakes/MockStrategy");
const IllegalStepError_1 = require("./errors/IllegalStepError");
describe("The Cucumber Function Generator", () => {
    describe("when attempting to generate a function with mixed segments", () => {
        var generator = new PepinoModule.Pepino.CucumberStepFunctionGenerator(new Array());
        var steps = new Array(new Step_1.Step("step 1", "some segment"), new Step_1.Step("step 2", "another segment"));
        it("should throw an exception", () => {
            expect(function () { generator.generate(steps); }).to.throw(IllegalStepError_1.IllegalStepError);
        });
    });
    describe("when generating cucumber code from a feature with steps", () => {
        var mock1 = new MockStrategy_1.MockStrategy("step 1", "byron");
        var mock2 = new MockStrategy_1.MockStrategy("step 2", "javascript");
        var generator = new PepinoModule.Pepino.CucumberStepFunctionGenerator(new Array(mock1, mock2));
        var steps = new Array(new Step_1.Step("step 1", "some segment"), new Step_1.Step("step 2", "some segment"));
        var code = generator.generate(steps);
        var lines = code.split("\n");
        it("should generate the test function signature for the given segment", () => {
            expect(lines[0]).to.equal("\tthis.defineStep(/^some segment$/, function() {");
        });
        it("should convert the first step text into the correct javascript code", () => {
            expect(lines[1]).to.equal("\t\tbyron");
        });
        it("should convert the second step text into the correct javascript code", () => {
            expect(lines[2]).to.equal("\t\tjavascript");
        });
        it("should finish the function", () => {
            expect(lines[3]).to.equal("\t});");
        });
    });
    describe("when a steps does not have a matching code generation strategy", () => {
        var no_matching_strategies = new Array();
        var generator = new PepinoModule.Pepino.CucumberStepFunctionGenerator(no_matching_strategies);
        var steps = new Array(new Step_1.Step("some step", "some segment"));
        var code = generator.generate(steps);
        var lines = code.split("\n");
        it("should return the code in commented form", () => {
            expect(lines[1]).to.equal("\t\t//some step");
        });
    });
    describe("when generating cucumber code from a feature with steps", () => {
        //Scenario:
        //   Given an authenticated user
        //   And the product creation page
        //   And the user has filled in all the required fields correctly
        //   When the user finally submits the form 
        //   Then the page title should be "New Products"           
        //   And the product should be visible in the product list 
        //Steps:
        //   Then the page title should be "$pageTitle"
        //     Verify page title is "$pageTitle"
        var steps1 = new Array(new Step_1.Step("Verify page title is \"$pageTitle\"", "the page title should be \"$pageTitle\""));
        var mock1 = new MockStrategy_1.MockStrategy("Verify page title is \"$pageTitle\"", "assert(title, pageTitle);");
        var codeGenerationStrategies = new Array(mock1);
        var generator = new PepinoModule.Pepino.CucumberStepFunctionGenerator(codeGenerationStrategies);
        var code = generator.generate(steps1);
        var lines = code.split("\n");
        describe("Generating a segment with variables", () => {
            it("should generate the test function signature with a variable", () => {
                expect(lines[0]).to.equal("\tthis.defineStep(/^the page title should be \"([^\"]*)\"$/, function(pageTitle) {");
            });
            it("should use the variable in the step", () => {
                expect(lines[1]).to.equal("\t\tassert(title, pageTitle);");
            });
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9zZXJ2aWNlcy9DdWN1bWJlclN0ZXBGdW5jdGlvbkdlbmVyYXRvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE1BQU8sSUFBSSxXQUFXLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsdUJBQW1CLG1CQUFtQixDQUFDLENBQUE7QUFFdkMsTUFBWSxZQUFZLFdBQU0scURBQXFELENBQUMsQ0FBQTtBQUNwRiwrQkFBMkIsc0JBQXNCLENBQUMsQ0FBQTtBQUNsRCxtQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUUzRCxRQUFRLENBQUMsaUNBQWlDLEVBQUU7SUFFeEMsUUFBUSxDQUFDLDREQUE0RCxFQUFFO1FBQ25FLElBQUksU0FBUyxHQUFHLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FDakUsSUFBSSxLQUFLLEVBQTJCLENBQUMsQ0FBQztRQUUxQyxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FDakIsSUFBSSxXQUFJLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxFQUNsQyxJQUFJLFdBQUksQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBRTNDLEVBQUUsQ0FBQywyQkFBMkIsRUFBRTtZQUM1QixNQUFNLENBQUMsY0FBWSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBZ0IsQ0FBQyxDQUFDO1FBQy9FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMseURBQXlELEVBQUU7UUFFaEUsSUFBSSxLQUFLLEdBQUcsSUFBSSwyQkFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLEtBQUssR0FBRyxJQUFJLDJCQUFZLENBQUMsUUFB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QkFBNkIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2hHLElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QixRQUFRLENBQUMscUNBQXFDLEVBQUU7WUFFNUMsRUFBRSxDQUFDLDZEQUE2RCxFQUFFO2dCQUM5RCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO1lBQ3BILENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHFDQUFxQyxFQUFFO2dCQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQy9ELENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImRvbWFpbi9zZXJ2aWNlcy9DdWN1bWJlclN0ZXBGdW5jdGlvbkdlbmVyYXRvci5zcGVjLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
