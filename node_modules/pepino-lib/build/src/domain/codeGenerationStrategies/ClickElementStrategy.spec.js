"use strict";
const chai = require("chai");
var expect = chai.expect;
const ClickElementStrategy_1 = require("./ClickElementStrategy");
describe("when converting pepino-lang instructions to click an element", () => {
    var strategy = new ClickElementStrategy_1.ClickElementStrategy();
    var instructions = "Click <#element>";
    it("should be able to generate typing instructions", () => {
        expect(strategy.canGenerate(instructions)).to.be.true;
    });
    it("should pass on unrecognized instructions", () => {
        expect(strategy.canGenerate("unrecognized instructions")).to.be.false;
    });
    it("should convert the step to cucumberjs code", () => {
        expect(strategy.generate(instructions))
            .to.equal("this.browser.click(\"#element\");");
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9jb2RlR2VuZXJhdGlvblN0cmF0ZWdpZXMvQ2xpY2tFbGVtZW50U3RyYXRlZ3kuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixNQUFPLElBQUksV0FBVyxNQUFNLENBQUMsQ0FBQztBQUM5QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLHVDQUFtQyx3QkFBd0IsQ0FBQyxDQUFBO0FBRTVELFFBQVEsQ0FBQyw4REFBOEQsRUFBRTtJQUVyRSxJQUFJLFFBQVEsR0FBRyxJQUFJLDJDQUFvQixFQUFFLENBQUM7SUFDMUMsSUFBSSxZQUFZLEdBQUcsa0JBQWtCLENBQUM7SUFFdEMsRUFBRSxDQUFDLGdEQUFnRCxFQUFFO1FBQ2pELE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMENBQTBDLEVBQUU7UUFDM0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQzFFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRDQUE0QyxFQUFFO1FBQzdDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImRvbWFpbi9jb2RlR2VuZXJhdGlvblN0cmF0ZWdpZXMvQ2xpY2tFbGVtZW50U3RyYXRlZ3kuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
