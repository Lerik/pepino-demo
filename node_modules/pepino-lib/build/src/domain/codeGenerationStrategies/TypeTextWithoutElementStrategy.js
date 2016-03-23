"use strict";
const StringHelper_1 = require("../helpers/StringHelper");
const VariableHelper_1 = require("../helpers/VariableHelper");
class TypeTextWithoutElementStrategy {
    canGenerate(text) {
        var lowercase = text.toLowerCase();
        return lowercase.startsWith("type ")
            && lowercase.indexOf("into") === -1;
    }
    generate(text) {
        var keys = StringHelper_1.StringHelper.extractTextInQuotes(text)[0];
        return "this.browser.keys(" + VariableHelper_1.VariableHelper.getString(keys) + ");";
    }
}
exports.TypeTextWithoutElementStrategy = TypeTextWithoutElementStrategy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9jb2RlR2VuZXJhdGlvblN0cmF0ZWdpZXMvVHlwZVRleHRXaXRob3V0RWxlbWVudFN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLCtCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELGlDQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBRXpEO0lBRUksV0FBVyxDQUFDLElBQVk7UUFDcEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztlQUM3QixTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNqQixJQUFJLElBQUksR0FBRywyQkFBWSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sQ0FBQyxvQkFBb0IsR0FBRywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDeEUsQ0FBQztBQUNMLENBQUM7QUFaWSxzQ0FBOEIsaUNBWTFDLENBQUEiLCJmaWxlIjoiZG9tYWluL2NvZGVHZW5lcmF0aW9uU3RyYXRlZ2llcy9UeXBlVGV4dFdpdGhvdXRFbGVtZW50U3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
