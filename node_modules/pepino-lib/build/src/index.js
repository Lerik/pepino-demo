"use strict";
const _ = require('underscore');
const p = require('./domain/services/StepParser');
const g = require('./domain/services/CucumberStepFunctionGenerator');
const fileGen = require('./domain/services/CommonJsCucumberStepFileGenerator');
const ClickElementStrategy_1 = require('./domain/codeGenerationStrategies/ClickElementStrategy');
const NavigateStrategy_1 = require('./domain/codeGenerationStrategies/NavigateStrategy');
const TypeTextWithElementStrategy_1 = require('./domain/codeGenerationStrategies/TypeTextWithElementStrategy');
const TypeTextWithoutElementStrategy_1 = require('./domain/codeGenerationStrategies/TypeTextWithoutElementStrategy');
const JasmineExpectStrategy_1 = require('./domain/jasmineExpectCodeGeneration/JasmineExpectStrategy');
var stepParser = new p.Pepino.PepinoLangStepParser();
var codeGenerator = new g.Pepino.CucumberStepFunctionGenerator(new Array(new ClickElementStrategy_1.ClickElementStrategy(), new NavigateStrategy_1.NavigateStrategy(), new TypeTextWithElementStrategy_1.TypeTextWithElementStrategy(), new TypeTextWithoutElementStrategy_1.TypeTextWithoutElementStrategy(), new JasmineExpectStrategy_1.JasmineExpectStrategy()));
var stepFileGenerator = new fileGen.Pepino.CommonJsCucumberStepFileGenerator();
class converter {
    constructor(fileGenerator, parser, stepGenerator) {
        this.fileGenerator = fileGenerator;
        this.parser = parser;
        this.stepGenerator = stepGenerator;
    }
    converter(pepinoStepFile) {
        var steps = this.parser.parse(pepinoStepFile);
        var stepsBySegment = _.groupBy(steps, (step) => {
            return step.segment;
        });
        var functions = _.map(Object.keys(stepsBySegment), (key) => {
            return this.stepGenerator.generate(stepsBySegment[key]);
        });
        var commonJsFile = this.fileGenerator.generate(functions);
        return commonJsFile;
    }
}
module.exports = new converter(stepFileGenerator, stepParser, codeGenerator);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLE1BQVksQ0FBQyxXQUFNLFlBQVksQ0FBQyxDQUFBO0FBRWhDLE1BQVksQ0FBQyxXQUFNLDhCQUE4QixDQUFDLENBQUE7QUFDbEQsTUFBWSxDQUFDLFdBQU0saURBQWlELENBQUMsQ0FBQTtBQUNyRSxNQUFZLE9BQU8sV0FBTSxxREFBcUQsQ0FBQyxDQUFBO0FBRy9FLHVDQUFtQyx3REFBd0QsQ0FBQyxDQUFBO0FBQzVGLG1DQUErQixvREFBb0QsQ0FBQyxDQUFBO0FBQ3BGLDhDQUEwQywrREFBK0QsQ0FBQyxDQUFBO0FBQzFHLGlEQUE2QyxrRUFBa0UsQ0FBQyxDQUFBO0FBQ2hILHdDQUFvQyw0REFBNEQsQ0FBQyxDQUFBO0FBR2pHLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0FBQ3JELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLEtBQUssQ0FDcEUsSUFBSSwyQ0FBb0IsRUFBRSxFQUMxQixJQUFJLG1DQUFnQixFQUFFLEVBQ3RCLElBQUkseURBQTJCLEVBQUUsRUFDakMsSUFBSSwrREFBOEIsRUFBRSxFQUNwQyxJQUFJLDZDQUFxQixFQUFFLENBQzlCLENBQUMsQ0FBQztBQUNILElBQUksaUJBQWlCLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLENBQUM7QUFFL0U7SUFFSSxZQUFvQixhQUFnRCxFQUNoRCxNQUE0QixFQUM1QixhQUF5RDtRQUZ6RCxrQkFBYSxHQUFiLGFBQWEsQ0FBbUM7UUFDaEQsV0FBTSxHQUFOLE1BQU0sQ0FBc0I7UUFDNUIsa0JBQWEsR0FBYixhQUFhLENBQTRDO0lBQzdFLENBQUM7SUFFRCxTQUFTLENBQUMsY0FBc0I7UUFDNUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFOUMsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJO1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsR0FBRztZQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxRCxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3hCLENBQUM7QUFDTCxDQUFDO0FBRUQsaUJBQVMsSUFBSSxTQUFTLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
