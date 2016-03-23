"use strict";
const StringHelper_1 = require("../../domain/helpers/StringHelper");
const _ = require('underscore');
const IllegalStepError_1 = require("./errors/IllegalStepError");
var Pepino;
(function (Pepino) {
    class NullCodeGenerationStrategy {
        generate(text) {
            return "//" + text;
        }
    }
    class CucumberStepFunctionGenerator {
        constructor(codeGenerationStrategies) {
            this._codeGenerators = codeGenerationStrategies;
        }
        generate(steps) {
            this.EnsureStepsOnlyHaveOneSegment(steps);
            return this.generateEntireFunction(steps);
        }
        EnsureStepsOnlyHaveOneSegment(steps) {
            var groups = _.unique(steps, (step) => {
                return step.segment;
            });
            if (groups.length > 1) {
                throw new IllegalStepError_1.IllegalStepError(groups[1].segment);
            }
        }
        generateEntireFunction(steps) {
            const tab = "\t";
            var stepSegmentText = _.first(steps).segment;
            var variables = StringHelper_1.StringHelper.extractTextInQuotes(stepSegmentText);
            var lines = [tab + this.generateFunctionSignature(stepSegmentText, variables)];
            _.each(steps, (step) => {
                var gen = _.find(this._codeGenerators, (g) => { return g.canGenerate(step.text); })
                    || new NullCodeGenerationStrategy();
                var generatedCode = gen.generate(step.text);
                lines.push(tab + tab + generatedCode);
            });
            lines.push(tab + "});");
            lines.push("");
            return lines.join('\n');
        }
        generateFunctionSignature(stepSegmentText, variables) {
            const anyString = "\"([^\"]*)\"";
            var args = _.map(variables, (v) => {
                return v.replace("$", "");
            }).join(", ");
            var doctoredText = stepSegmentText;
            variables.forEach((v) => {
                if (v.startsWith("$")) {
                    doctoredText = doctoredText.replace("\"" + v + "\"", anyString);
                }
            });
            return "this.defineStep(/^" + doctoredText + "$/, function(" + args + ") {";
        }
        ;
    }
    Pepino.CucumberStepFunctionGenerator = CucumberStepFunctionGenerator;
})(Pepino = exports.Pepino || (exports.Pepino = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9zZXJ2aWNlcy9DdWN1bWJlclN0ZXBGdW5jdGlvbkdlbmVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFJYiwrQkFBMkIsbUNBQW1DLENBQUMsQ0FBQTtBQUMvRCxNQUFZLENBQUMsV0FBTSxZQUFZLENBQUMsQ0FBQTtBQUNoQyxtQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUUzRCxJQUFjLE1BQU0sQ0FtRW5CO0FBbkVELFdBQWMsTUFBTSxFQUFDLENBQUM7SUFFbEI7UUFDSSxRQUFRLENBQUMsSUFBWTtZQUNqQixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO0lBQ0wsQ0FBQztJQUVEO1FBSUksWUFBWSx3QkFBd0Q7WUFDaEUsSUFBSSxDQUFDLGVBQWUsR0FBRyx3QkFBd0IsQ0FBQztRQUNwRCxDQUFDO1FBRUQsUUFBUSxDQUFDLEtBQWtCO1lBQ3ZCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFTyw2QkFBNkIsQ0FBQyxLQUFrQjtZQUNwRCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUk7Z0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLElBQUksbUNBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELENBQUM7UUFDTCxDQUFDO1FBRU8sc0JBQXNCLENBQUMsS0FBa0I7WUFDN0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBRWpCLElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzdDLElBQUksU0FBUyxHQUFHLDJCQUFZLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBRS9FLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSTtnQkFDZixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO3VCQUMzRSxJQUFJLDBCQUEwQixFQUFFLENBQUM7Z0JBRXhDLElBQUksYUFBYSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDLENBQUM7WUFFMUMsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWYsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUVPLHlCQUF5QixDQUFDLGVBQXVCLEVBQUUsU0FBd0I7WUFDL0UsTUFBTSxTQUFTLEdBQVcsY0FBYyxDQUFDO1lBQ3pDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNkLElBQUksWUFBWSxHQUFHLGVBQWUsQ0FBQztZQUNuQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25CLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNwRSxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsb0JBQW9CLEdBQUcsWUFBWSxHQUFHLGVBQWUsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2hGLENBQUM7O0lBQ0wsQ0FBQztJQTFEWSxvQ0FBNkIsZ0NBMER6QyxDQUFBO0FBQ0wsQ0FBQyxFQW5FYSxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFtRW5CIiwiZmlsZSI6ImRvbWFpbi9zZXJ2aWNlcy9DdWN1bWJlclN0ZXBGdW5jdGlvbkdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
