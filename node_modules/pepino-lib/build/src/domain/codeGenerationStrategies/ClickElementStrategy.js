"use strict";
const StringHelper_1 = require("../helpers/StringHelper");
class ClickElementStrategy {
    canGenerate(text) {
        var lowercase = text.toLowerCase();
        return lowercase.startsWith("click ");
    }
    generate(text) {
        var element = StringHelper_1.StringHelper.extractTextInGreaterThanLessThan(text);
        return "this.browser.click(\"" + element + "\");";
    }
}
exports.ClickElementStrategy = ClickElementStrategy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9jb2RlR2VuZXJhdGlvblN0cmF0ZWdpZXMvQ2xpY2tFbGVtZW50U3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIsK0JBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFFckQ7SUFFSSxXQUFXLENBQUMsSUFBWTtRQUNwQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFZO1FBQ2pCLElBQUksT0FBTyxHQUFHLDJCQUFZLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLHVCQUF1QixHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDdEQsQ0FBQztBQUNMLENBQUM7QUFYWSw0QkFBb0IsdUJBV2hDLENBQUEiLCJmaWxlIjoiZG9tYWluL2NvZGVHZW5lcmF0aW9uU3RyYXRlZ2llcy9DbGlja0VsZW1lbnRTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
