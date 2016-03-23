"use strict";
const Step_1 = require('../Step');
var Pepino;
(function (Pepino) {
    class PepinoLangStepParser {
        parse(s) {
            var lines = s.split("\n");
            var steps = new Array();
            for (var i = 0; i < lines.length - 1; i++) {
                if (lines[i].length > 0) {
                    var segment = lines[i].trim();
                    while (segment) {
                        i++;
                        if (i >= lines.length)
                            break;
                        var stepText = lines[i].trim();
                        if (stepText.length === 0) {
                            segment = false;
                        }
                        else {
                            steps.push(new Step_1.Step(stepText, segment));
                        }
                    }
                    var line = lines[i];
                }
            }
            return steps;
        }
    }
    Pepino.PepinoLangStepParser = PepinoLangStepParser;
})(Pepino = exports.Pepino || (exports.Pepino = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9zZXJ2aWNlcy9TdGVwUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLHVCQUFtQixTQUFTLENBQUMsQ0FBQTtBQUc3QixJQUFjLE1BQU0sQ0FtQ25CO0FBbkNELFdBQWMsTUFBTSxFQUFDLENBQUM7SUFNbEI7UUFDSSxLQUFLLENBQUMsQ0FBUztZQUNYLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztZQUU5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBRXhDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFdEIsSUFBSSxPQUFPLEdBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNuQyxPQUFNLE9BQU8sRUFBQyxDQUFDO3dCQUNYLENBQUMsRUFBRSxDQUFDO3dCQUNKLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDOzRCQUFDLEtBQUssQ0FBQzt3QkFDMUIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUMvQixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQ3BCLE9BQU8sR0FBRyxLQUFLLENBQUM7d0JBQ3BCLENBQUM7d0JBQ0QsSUFBSSxDQUFBLENBQUM7NEJBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTt3QkFDM0MsQ0FBQztvQkFDTCxDQUFDO29CQUNELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFeEIsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBNUJZLDJCQUFvQix1QkE0QmhDLENBQUE7QUFDTCxDQUFDLEVBbkNhLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQW1DbkIiLCJmaWxlIjoiZG9tYWluL3NlcnZpY2VzL1N0ZXBQYXJzZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
