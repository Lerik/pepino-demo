"use strict";
const chai = require("chai");
var expect = chai.expect;
const VariableHelper_1 = require("./VariableHelper");
describe("The Variable Helper", () => {
    describe("when getting a string for injection into javascript", () => {
        describe("without variable", () => {
            it("should return the same string wrapped in quotes", () => {
                expect(VariableHelper_1.VariableHelper.getString("hello")).to.equal("\"hello\"");
            });
        });
        describe("with variable", () => {
            it("should return the variable name", () => {
                expect(VariableHelper_1.VariableHelper.getString("$someVariable")).to.equal("someVariable");
            });
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9oZWxwZXJzL1ZhcmlhYmxlSGVscGVyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsTUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixpQ0FBNkIsa0JBQWtCLENBQUMsQ0FBQTtBQUVoRCxRQUFRLENBQUMscUJBQXFCLEVBQUc7SUFFN0IsUUFBUSxDQUFDLHFEQUFxRCxFQUFFO1FBRTVELFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtZQUV6QixFQUFFLENBQUMsaURBQWlELEVBQUU7Z0JBQ2xELE1BQU0sQ0FBQywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxlQUFlLEVBQUU7WUFFdEIsRUFBRSxDQUFDLGlDQUFpQyxFQUFFO2dCQUNsQyxNQUFNLENBQUMsK0JBQWMsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQy9FLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImRvbWFpbi9oZWxwZXJzL1ZhcmlhYmxlSGVscGVyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
