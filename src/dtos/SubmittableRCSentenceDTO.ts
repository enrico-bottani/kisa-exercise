import { AnswerIndexer, AnswerSheetItemDTO, AssignableDTO, RCExerciseDTO, RCAnswerableDTO, RCSentenceDTO } from "./DTOs";

class RCSentenceModelBuilder implements RCSentenceDTO {
    id: number = -1;
    assignables: AssignableDTO[] = [];
    answerMap: AnswerIndexer[] = [];
    answerSheet: AnswerSheetItemDTO[] = [];

    constructor() { }

    setAssignables(assignables: AssignableDTO[]): RCSentenceModelBuilder {
        this.assignables = assignables;
        return this;
    }

    setAnswerMap(answerMap: AnswerIndexer[]): RCSentenceModelBuilder {
        this.answerMap = answerMap;
        return this;
    }

    setAnswerSheet(answerSheet: AnswerSheetItemDTO[]): RCSentenceModelBuilder {
        this.answerSheet = answerSheet;
        return this;
    }

    setNumber(number: number): RCSentenceModelBuilder {
        this.id = number;
        return this;
    }

    build(): SubmittableRCSentenceDTO {
        return new SubmittableRCSentenceDTO(this.id, this.assignables, this.answerMap, this.answerSheet);
    }
}


class SubmittableRCSentenceDTO implements RCSentenceDTO {

    id: number;

    assignables: AssignableDTO[];
    answerMap: AnswerIndexer[];
    answerSheet: AnswerSheetItemDTO[] = [];

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

    getAnswerableAt(i: number): RCAnswerableDTO {
        return this.assignables[this.answerMap[i].index] as RCAnswerableDTO;
    }

    constructor(number: number, assignables: AssignableDTO[], answers: AnswerIndexer[], answerSheet: AnswerSheetItemDTO[]) {
        this.id = number;
        this.assignables = assignables;
        this.answerMap = answers;
        this.answerSheet = answerSheet;
    }
}
export default SubmittableRCSentenceDTO;