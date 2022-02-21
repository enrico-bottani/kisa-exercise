import SentenceType from "../../../models/ExerciseType";
import TodoType from "../../../models/TodoType";
import JSONDeepCopy from "../../../utils/JSONDeepCopy";
import { AnswerIndexer, AnswerSheetItemDTO, AssignableDTO } from "../../DTOs";
import { I_RCSentenceDTO } from "./I_RCSentenceDTO";

export class RCSentenceDTOBuilder {
    assignables: AssignableDTO[] = [];
    answerMap: AnswerIndexer[] = [];
    answerSheet: (AnswerSheetItemDTO | null)[] = [];
    position: number = 0;
    type: string = TodoType.RCSentenceType;
    dirty?: boolean = false;
    setAssignables(assignables: AssignableDTO[]): RCSentenceDTOBuilder {
        this.assignables = assignables;
        return this;
    }
    setAnswerMap(answerMap: AnswerIndexer[]): RCSentenceDTOBuilder {
        this.answerMap = answerMap;
        return this;
    }
    setAnswerSheet(answerSheet: (AnswerSheetItemDTO | null)[]): RCSentenceDTOBuilder {
        this.answerSheet = answerSheet;
        return this;
    }
    setPosition(position: number): RCSentenceDTOBuilder {
        this.position = position;
        return this;
    }
    setType(type: string): RCSentenceDTOBuilder {
        this.type = type;
        return this;
    }
    setDirty(dirty: boolean): RCSentenceDTOBuilder {
        this.dirty = dirty;
        return this;
    }
    build(): RCSentenceDTO {
        return new RCSentenceDTO(this.assignables, this.answerMap, this.answerSheet, this.position, this.type, this.dirty);
    }
}

export class RCSentenceDTO implements I_RCSentenceDTO {
    assignables: AssignableDTO[] = [];
    answerMap: AnswerIndexer[] = [];
    answerSheet: (AnswerSheetItemDTO | null)[] = [];
    position: number = 0;
    type: string = SentenceType.Undefined;
    dirty?: boolean;
    constructor(assignables: AssignableDTO[], answerMap: AnswerIndexer[], answerSheet: (AnswerSheetItemDTO | null)[], position: number, type: string, dirty?: boolean) {
        this.assignables = assignables;
        this.answerMap = answerMap;
        this.answerSheet = answerSheet;
        this.position = position;
        this.type = type;
        this.dirty = dirty;
    }
    static builder() {
        return new RCSentenceDTOBuilder();
    }
    clone(): RCSentenceDTO {
        return new RCSentenceDTO(JSONDeepCopy.deepCopy(this.assignables), JSONDeepCopy.deepCopy(this.answerMap), JSONDeepCopy.deepCopy(this.answerSheet), this.position, this.type, this.dirty)
    }
}

