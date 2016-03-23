"use strict";
class VariableHelper {
    static getString(str) {
        var contents = str.startsWith("$")
            ? str.replace("$", "")
            : "\"" + str + "\"";
        return contents;
    }
}
exports.VariableHelper = VariableHelper;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9oZWxwZXJzL1ZhcmlhYmxlSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUdiO0lBRUksT0FBTyxTQUFTLENBQUMsR0FBVztRQUN4QixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztjQUM1QixHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUM7Y0FDbkIsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFFeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNwQixDQUFDO0FBQ0wsQ0FBQztBQVRZLHNCQUFjLGlCQVMxQixDQUFBIiwiZmlsZSI6ImRvbWFpbi9oZWxwZXJzL1ZhcmlhYmxlSGVscGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
