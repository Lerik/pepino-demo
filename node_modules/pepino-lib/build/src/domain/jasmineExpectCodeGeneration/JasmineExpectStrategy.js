"use strict";
const StringHelper_1 = require("../helpers/StringHelper");
const VariableHelper_1 = require("../helpers/VariableHelper");
class JasmineExpectStrategy {
    canGenerate(text) {
        var lowercase = text.toLowerCase();
        var hasNegator = lowercase.indexOf(" not ") > -1;
        return lowercase.startsWith("verify ") && !hasNegator;
    }
    generate(text) {
        var shouldEqual = StringHelper_1.StringHelper.extractTextInQuotes(text);
        var element = StringHelper_1.StringHelper.extractTextInGreaterThanLessThan(text);
        var contents = VariableHelper_1.VariableHelper.getString(shouldEqual[0]);
        return "expect(browser.getText(\"" + element + "\").join()).toContain(" + contents + ");";
    }
}
exports.JasmineExpectStrategy = JasmineExpectStrategy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9qYXNtaW5lRXhwZWN0Q29kZUdlbmVyYXRpb24vSmFzbWluZUV4cGVjdFN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLCtCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELGlDQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBRXpEO0lBRUksV0FBVyxDQUFDLElBQVk7UUFDcEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDMUQsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFZO1FBQ2pCLElBQUksV0FBVyxHQUFHLDJCQUFZLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxPQUFPLEdBQUcsMkJBQVksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLFFBQVEsR0FBRywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsMkJBQTJCLEdBQUcsT0FBTyxHQUFHLHdCQUF3QixHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDOUYsQ0FBQztBQUNMLENBQUM7QUFkWSw2QkFBcUIsd0JBY2pDLENBQUEiLCJmaWxlIjoiZG9tYWluL2phc21pbmVFeHBlY3RDb2RlR2VuZXJhdGlvbi9KYXNtaW5lRXhwZWN0U3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
