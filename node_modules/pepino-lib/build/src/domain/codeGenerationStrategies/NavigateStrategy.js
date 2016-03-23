"use strict";
class NavigateStrategy {
    canGenerate(text) {
        return text.toLowerCase().startsWith("navigate to ");
    }
    generate(text) {
        var url = text.toLowerCase().replace("navigate to ", "");
        return "this.browser.url(\"" + url + "\");";
    }
}
exports.NavigateStrategy = NavigateStrategy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9jb2RlR2VuZXJhdGlvblN0cmF0ZWdpZXMvTmF2aWdhdGVTdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFHYjtJQUVJLFdBQVcsQ0FBQyxJQUFZO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxRQUFRLENBQUMsSUFBWTtRQUNqQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMscUJBQXFCLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUNoRCxDQUFDO0FBQ0wsQ0FBQztBQVZZLHdCQUFnQixtQkFVNUIsQ0FBQSIsImZpbGUiOiJkb21haW4vY29kZUdlbmVyYXRpb25TdHJhdGVnaWVzL05hdmlnYXRlU3RyYXRlZ3kuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
