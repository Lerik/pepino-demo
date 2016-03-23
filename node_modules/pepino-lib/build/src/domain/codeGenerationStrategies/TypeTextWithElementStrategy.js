"use strict";
const StringHelper_1 = require("../helpers/StringHelper");
class TypeTextWithElementStrategy {
    canGenerate(text) {
        var lowercase = text.toLowerCase();
        return lowercase.startsWith("type ")
            && lowercase.indexOf("into") > -1;
    }
    generate(text) {
        var keys = StringHelper_1.StringHelper.extractTextInQuotes(text);
        var element = StringHelper_1.StringHelper.extractTextInGreaterThanLessThan(text);
        var contents = keys[0].startsWith("$")
            ? keys[0].replace("$", "")
            : "\"" + keys + "\"";
        return "this.browser.setValue(\"" + element + "\", " + contents + ");";
    }
}
exports.TypeTextWithElementStrategy = TypeTextWithElementStrategy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9jb2RlR2VuZXJhdGlvblN0cmF0ZWdpZXMvVHlwZVRleHRXaXRoRWxlbWVudFN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLCtCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBR3JEO0lBRUksV0FBVyxDQUFDLElBQVk7UUFDcEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztlQUM3QixTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNqQixJQUFJLElBQUksR0FBRywyQkFBWSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUksT0FBTyxHQUFHLDJCQUFZLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7Y0FDaEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDO2NBQ3ZCLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRXpCLE1BQU0sQ0FBQywwQkFBMEIsR0FBRyxPQUFPLEdBQUcsTUFBTSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDM0UsQ0FBQztBQUNMLENBQUM7QUFsQlksbUNBQTJCLDhCQWtCdkMsQ0FBQSIsImZpbGUiOiJkb21haW4vY29kZUdlbmVyYXRpb25TdHJhdGVnaWVzL1R5cGVUZXh0V2l0aEVsZW1lbnRTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
