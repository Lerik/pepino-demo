"use strict";
var Pepino;
(function (Pepino) {
    class CommonJsCucumberStepFileGenerator {
        generate(functions) {
            return "module.exports = function() {\n" + functions.join("\n\n") + "\n };";
        }
    }
    Pepino.CommonJsCucumberStepFileGenerator = CommonJsCucumberStepFileGenerator;
})(Pepino = exports.Pepino || (exports.Pepino = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9zZXJ2aWNlcy9Db21tb25Kc0N1Y3VtYmVyU3RlcEZpbGVHZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBQ2IsSUFBYyxNQUFNLENBV25CO0FBWEQsV0FBYyxNQUFNLEVBQUMsQ0FBQztJQU1sQjtRQUNJLFFBQVEsQ0FBQyxTQUF3QjtZQUM3QixNQUFNLENBQUMsaUNBQWlDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDaEYsQ0FBQztJQUNMLENBQUM7SUFKWSx3Q0FBaUMsb0NBSTdDLENBQUE7QUFDTCxDQUFDLEVBWGEsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBV25CIiwiZmlsZSI6ImRvbWFpbi9zZXJ2aWNlcy9Db21tb25Kc0N1Y3VtYmVyU3RlcEZpbGVHZW5lcmF0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
