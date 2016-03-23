"use strict";
const chai = require("chai");
var expect = chai.expect;
const StringHelper_1 = require("./StringHelper");
describe("The String Helper", () => {
    describe("when capitalizing the first letter", () => {
        it("return a one word with the first letter capitalized", (done) => {
            expect(StringHelper_1.StringHelper.capitalizeFirstLetter("something")).to.equal("Something");
            done();
        });
        it("return a multiple words with the first letter capitalized", (done) => {
            expect(StringHelper_1.StringHelper.capitalizeFirstLetter("here are multiple words")).to.equal("Here are multiple words");
            done();
        });
    });
    describe("when extracting text between greater than and less than symbols", () => {
        it("should be able to extract one word", (done) => {
            expect(StringHelper_1.StringHelper.extractTextInGreaterThanLessThan("this text is in <brackets>")[0]).to.equal("brackets");
            done();
        });
        it("should be able to extract multiple words", (done) => {
            expect(StringHelper_1.StringHelper.extractTextInGreaterThanLessThan("this text is <in brackets>")[0]).to.equal("in brackets");
            done();
        });
        it("should be able to extract multiple bracketed words", (done) => {
            expect(StringHelper_1.StringHelper.extractTextInGreaterThanLessThan("this text is <in brackets>")[0]).to.equal("in brackets");
            done();
        });
        it("should return an empty array when no symbols exist", (done) => {
            expect(StringHelper_1.StringHelper.extractTextInGreaterThanLessThan("no symbols").length).to.equal(0);
            done();
        });
    });
    describe("when extracting text between quotes", () => {
        it("should be able to extract one word", (done) => {
            expect(StringHelper_1.StringHelper.extractTextInQuotes("this text is in \"quotes\"")[0]).to.equal("quotes");
            done();
        });
        it("should be able to extract multiple words", (done) => {
            expect(StringHelper_1.StringHelper.extractTextInQuotes("this text is \"in quotes\"")[0]).to.equal("in quotes");
            done();
        });
        it("should be able to extract multiple quoted strings", (done) => {
            expect(StringHelper_1.StringHelper.extractTextInQuotes("this text is \"in quotes\" and \"and this in quotes\"")[1])
                .to.equal("and this in quotes");
            done();
        });
        it("should return an empty array when no quotes exist", (done) => {
            expect(StringHelper_1.StringHelper.extractTextInQuotes("no quotes").length).to.equal(0);
            done();
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9oZWxwZXJzL1N0cmluZ0hlbHBlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE1BQU8sSUFBSSxXQUFXLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsK0JBQTJCLGdCQUFnQixDQUFDLENBQUE7QUFFNUMsUUFBUSxDQUFDLG1CQUFtQixFQUFHO0lBQzNCLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRTtRQUUzQyxFQUFFLENBQUMscURBQXFELEVBQUUsQ0FBQyxJQUFJO1lBQzNELE1BQU0sQ0FBQywyQkFBWSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5RSxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDJEQUEyRCxFQUFFLENBQUMsSUFBSTtZQUNqRSxNQUFNLENBQUMsMkJBQVksQ0FBQyxxQkFBcUIsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzFHLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxpRUFBaUUsRUFBRTtRQUV4RSxFQUFFLENBQUMsb0NBQW9DLEVBQUUsQ0FBQyxJQUFJO1lBQzFDLE1BQU0sQ0FBQywyQkFBWSxDQUFDLGdDQUFnQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVHLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsMENBQTBDLEVBQUUsQ0FBQyxJQUFJO1lBQ2hELE1BQU0sQ0FBQywyQkFBWSxDQUFDLGdDQUFnQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQy9HLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsb0RBQW9ELEVBQUUsQ0FBQyxJQUFJO1lBQzFELE1BQU0sQ0FBQywyQkFBWSxDQUFDLGdDQUFnQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQy9HLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsb0RBQW9ELEVBQUUsQ0FBQyxJQUFJO1lBQzFELE1BQU0sQ0FBQywyQkFBWSxDQUFDLGdDQUFnQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkYsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLHFDQUFxQyxFQUFFO1FBRTVDLEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxDQUFDLElBQUk7WUFDdEMsTUFBTSxDQUFDLDJCQUFZLENBQUMsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0YsSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywwQ0FBMEMsRUFBRSxDQUFDLElBQUk7WUFDNUMsTUFBTSxDQUFDLDJCQUFZLENBQUMsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEcsSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxDQUFDLElBQUk7WUFDckQsTUFBTSxDQUFDLDJCQUFZLENBQUMsbUJBQW1CLENBQUMsdURBQXVELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0YsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsbURBQW1ELEVBQUUsQ0FBQyxJQUFJO1lBQ3JELE1BQU0sQ0FBQywyQkFBWSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekUsSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZG9tYWluL2hlbHBlcnMvU3RyaW5nSGVscGVyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
