"use strict";
const chai = require("chai");
var expect = chai.expect;
const f = require("../../domain/services/StepParser");
describe("The Step Parser", () => {
    var parser = new f.Pepino.PepinoLangStepParser();
    describe("when parsing a step file", () => {
        var stepText = `
            I have navigated to the search screen
              Navigate to http://mysite.com
            
            I search for "$SearchTerm"
              Type "$SearchTerm" into <#search> element
              Click the <#submit> button
            
            I should find "$ExpectedResult" in the results
              Verify "$ExpectedResult" is in <#results> element
        `;
        var steps = parser.parse(stepText);
        it("should be an array of steps", (done) => {
            expect(steps).to.be.an.instanceof(Array);
            done();
        });
        it("should match the first step text with first segment text", (done) => {
            expect(steps[0].segment).to.equal('I have navigated to the search screen');
            expect(steps[0].text).to.equal('Navigate to http://mysite.com');
            done();
        });
        it("should match the second and third step texts with second segment text", (done) => {
            expect(steps[1].segment).to.equal('I search for "$SearchTerm"');
            expect(steps[1].text).to.equal('Type "$SearchTerm" into <#search> element');
            expect(steps[2].segment).to.equal('I search for "$SearchTerm"');
            expect(steps[2].text).to.equal('Click the <#submit> button');
            done();
        });
        it("should match the third step text with fourth segment text", (done) => {
            expect(steps[3].segment).to.equal('I should find "$ExpectedResult" in the results');
            expect(steps[3].text).to.equal('Verify "$ExpectedResult" is in <#results> element');
            done();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9zZXJ2aWNlcy9TdGVwUGFyc2VyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixNQUFZLENBQUMsV0FBTSxrQ0FBa0MsQ0FBQyxDQUFBO0FBR3RELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtJQUV4QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUVqRCxRQUFRLENBQUMsMEJBQTBCLEVBQUU7UUFFakMsSUFBSSxRQUFRLEdBQUc7Ozs7Ozs7Ozs7U0FVZCxDQUFDO1FBRUYsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVuQyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsQ0FBQyxJQUFJO1lBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywwREFBMEQsRUFBRSxDQUFDLElBQUk7WUFDaEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7WUFDM0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDaEUsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyx1RUFBdUUsRUFBRSxDQUFDLElBQUk7WUFDN0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7WUFFNUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDaEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFFN0QsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywyREFBMkQsRUFBRSxDQUFDLElBQUk7WUFDakUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7WUFDcEYsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7WUFDcEYsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZG9tYWluL3NlcnZpY2VzL1N0ZXBQYXJzZXIuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
