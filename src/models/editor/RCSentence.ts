import { AnswerIndexer, AnswerSheet, AssignableDTO, RCExerciseDTO, RCAnswerable, RCSentenceDTO } from "../../dtos/DTOs";

class RCSentenceModelBuilder implements RCSentenceDTO {
    number: number = 0;
    assignables: AssignableDTO[] = [];
    answerMap: AnswerIndexer[] = [];
    answerSheet: AnswerSheet[] = [];

    constructor() { }

    setAssignables(assignables: AssignableDTO[]): RCSentenceModelBuilder {
        this.assignables = assignables;
        return this;
    }

    setAnswerMap(answerMap: AnswerIndexer[]): RCSentenceModelBuilder {
        this.answerMap = answerMap;
        return this;
    }

    setAnswerSheet(answerSheet: AnswerSheet[]): RCSentenceModelBuilder {
        this.answerSheet = answerSheet;
        return this;
    }

    setNumber(number: number): RCSentenceModelBuilder {
        this.number = number;
        return this;
    }

    build(): RCSentenceModel {
        return new RCSentenceModel(this.number, this.assignables, this.answerMap, this.answerSheet);
    }
}


class RCSentenceModel implements RCSentenceDTO {

    number: number;

    assignables: AssignableDTO[];
    answerMap: AnswerIndexer[];
    answerSheet: AnswerSheet[] = [];

    static builder(): RCSentenceModelBuilder {
        return new RCSentenceModelBuilder();
    }

    submittable(): boolean {
        for (let i = 0; i < this.getAnswerablesLength(); i++) {
            const answerable = this.getAnswerableAt(i);
            if (answerable.choices.length < 2) return false;
        }
        if (this.answerSheet.length != this.answerMap.length) {
            return false;
        }

        return true;
    }

    getAnswerablesLength(): number {
        return this.answerMap.length;
    }

    getAnswerableAt(i: number): RCAnswerable {
        return this.assignables[this.answerMap[i].index] as RCAnswerable;
    }

    constructor(number: number, assignables: AssignableDTO[], answers: AnswerIndexer[], answerSheet: AnswerSheet[]) {
        this.number = number;
        this.assignables = assignables;
        this.answerMap = answers;
        this.answerSheet = answerSheet;
    }
}
export default RCSentenceModel;