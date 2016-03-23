"use strict";
class StringHelper {
    static extractTextInQuotes(str) {
        return this.getArrayOfMatches(str, /"(.*?)"/g);
    }
    static extractTextInGreaterThanLessThan(str) {
        return this.getArrayOfMatches(str, /\<(.*?)\>/g);
    }
    static getArrayOfMatches(str, exp) {
        var matches = new Array();
        var match = exp.exec(str);
        while (match !== null) {
            matches.push(match[1]);
            match = exp.exec(str);
        }
        return matches;
    }
    static capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
exports.StringHelper = StringHelper;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9oZWxwZXJzL1N0cmluZ0hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFHYjtJQUVJLE9BQU8sbUJBQW1CLENBQUMsR0FBVztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsT0FBTyxnQ0FBZ0MsQ0FBQyxHQUFXO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxPQUFlLGlCQUFpQixDQUFDLEdBQVcsRUFBRSxHQUFXO1FBQ3JELElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDbEMsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixPQUFNLEtBQUssS0FBSyxJQUFJLEVBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxPQUFPLHFCQUFxQixDQUFDLEdBQVc7UUFDcEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0FBQ0wsQ0FBQztBQXZCWSxvQkFBWSxlQXVCeEIsQ0FBQSIsImZpbGUiOiJkb21haW4vaGVscGVycy9TdHJpbmdIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
