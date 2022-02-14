interface ExerciseSingleChoiceSolution extends CompositeKey {
    // composite key
    status: number;
    choosenSolutionId: number;
}
interface CompositeKey {
    choiceId: number;
    sentenceId: number;
    exerciseId: number;
}




export class ExerciseSingleChoiceSolutionMap {
    eMap = new Map<number, Map<number, Map<number, ExerciseSingleChoiceSolution>>>();

    has(compositeKey: CompositeKey) {
        var test = this.eMap.get(compositeKey.exerciseId);
        if (test == undefined) return false;
        var test1 = test.get(compositeKey.sentenceId);
        if (test1 == undefined) return false;
        var test2 = test1.get(compositeKey.choiceId);
        if (test2 == undefined) return false;
        return true;
    }

    get(compositeKey: CompositeKey): ExerciseSingleChoiceSolution | undefined {
        return (this.eMap.get(compositeKey.exerciseId)?.get(compositeKey.sentenceId)?.get(compositeKey.choiceId));
    }

    constructor(solutions: ExerciseSingleChoiceSolution[]) {
        for (var i = 0; i < solutions.length; i++) {
            let exerciseId = solutions[i].exerciseId;
            if (!this.eMap.has(exerciseId))
                this.eMap.set(exerciseId, new Map());
            let sentenceMap = this.eMap.get(exerciseId);

            if (!sentenceMap?.has(solutions[i].sentenceId)) {
                sentenceMap?.set(solutions[i].sentenceId, new Map());
            }
            let choiceMap = sentenceMap?.get(solutions[i].sentenceId);
            if (!choiceMap?.has(solutions[i].choiceId)) {
                choiceMap?.set(solutions[i].choiceId, solutions[i])
            }
        }
        console.log("map: ", this.eMap);
    }
}
export default ExerciseSingleChoiceSolution;