"use strict";
const StringHelper_1 = require("../helpers/StringHelper");
const VariableHelper_1 = require("../helpers/VariableHelper");
class JasmineExpectNotStrategy {
    canGenerate(text) {
        var lowercase = text.toLowerCase();
        var isVerify = lowercase.startsWith("verify ");
        var hasNegator = lowercase.indexOf(" not ") > -1;
        return isVerify && hasNegator;
    }
    generate(text) {
        var shouldEqual = StringHelper_1.StringHelper.extractTextInQuotes(text);
        var element = StringHelper_1.StringHelper.extractTextInGreaterThanLessThan(text);
        var contents = VariableHelper_1.VariableHelper.getString(shouldEqual[0]);
        return "expect(browser.getText(\"" + element + "\").join()).toNotContain(" + contents + ");";
    }
}
exports.JasmineExpectNotStrategy = JasmineExpectNotStrategy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9qYXNtaW5lRXhwZWN0Q29kZUdlbmVyYXRpb24vSmFzbWluZUV4cGVjdE5vdFN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLCtCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELGlDQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBRXpEO0lBRUksV0FBVyxDQUFDLElBQVk7UUFDcEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsUUFBUSxJQUFJLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDakIsSUFBSSxXQUFXLEdBQUcsMkJBQVksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLE9BQU8sR0FBRywyQkFBWSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLElBQUksUUFBUSxHQUFHLCtCQUFjLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQywyQkFBMkIsR0FBRyxPQUFPLEdBQUcsMkJBQTJCLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztJQUNqRyxDQUFDO0FBQ0wsQ0FBQztBQWZZLGdDQUF3QiwyQkFlcEMsQ0FBQSIsImZpbGUiOiJkb21haW4vamFzbWluZUV4cGVjdENvZGVHZW5lcmF0aW9uL0phc21pbmVFeHBlY3ROb3RTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
