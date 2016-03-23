"use strict";
class MockStrategy {
    constructor(matchingText, codeGenerated) {
        this._matchingText = matchingText;
        this._codeGenerated = codeGenerated;
    }
    canGenerate(text) {
        return text === this._matchingText;
    }
    generate(text) {
        return this._codeGenerated;
    }
}
exports.MockStrategy = MockStrategy;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvbWFpbi9zZXJ2aWNlcy9mYWtlcy9Nb2NrU3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBR2I7SUFLSSxZQUFZLFlBQW9CLEVBQUUsYUFBcUI7UUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7SUFDeEMsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQVk7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztBQUNMLENBQUM7QUFqQlksb0JBQVksZUFpQnhCLENBQUEiLCJmaWxlIjoiZG9tYWluL3NlcnZpY2VzL2Zha2VzL01vY2tTdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
