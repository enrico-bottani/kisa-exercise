import TodoType from "../../../TodoType";
import JSONDeepCopy from "../../../../utils/JSONDeepCopy";
import { AnswerIndexer, AnswerSheetItemDTO, AssignableDTO } from "../../../../dtos/DTOs";
import { I_RCSentenceDTO } from "../../../../dtos/exercise/todo/rc_sentence/I_RCSentenceDTO";
import Todo from "../Todo";

export class RCSentence_Builder {
    assignables: AssignableDTO[] = [];
    answerMap: AnswerIndexer[] = [];
    answerSheet: (AnswerSheetItemDTO | null)[] = [];
    position: number = 0;
    type: string = TodoType.RCSentenceType;
    dirty?: boolean = false;
    setAssignables(assignables: AssignableDTO[]): RCSentence_Builder {
        this.assignables = assignables;
        return this;
    }
    setAnswerMap(answerMap: AnswerIndexer[]): RCSentence_Builder {
        if (answerMap === undefined) return this;
        this.answerMap = answerMap;
        return this;
    }
    setAnswerSheet(answerSheet: (AnswerSheetItemDTO | null)[]): RCSentence_Builder {
        if (answerSheet === undefined) return this;
        this.answerSheet = answerSheet;
        return this;
    }
    setPosition(position: number): RCSentence_Builder {
        if (position === undefined) return this;
        this.position = position;
        return this;
    }
    setType(type: string): RCSentence_Builder {
        if (type === undefined) return this;
        this.type = type;
        return this;
    }
    setDirty(dirty: boolean): RCSentence_Builder {
        if (dirty === undefined) return this;
        this.dirty = dirty;
        return this;
    }
    build(): RCSentence {
        return new RCSentence(this.assignables, this.answerMap, this.answerSheet, this.position, this.type, this.dirty);
    }
}

export class RCSentence extends Todo implements I_RCSentenceDTO {
    assignables: AssignableDTO[] = [];
    answerMap: AnswerIndexer[] = [];
    answerSheet: (AnswerSheetItemDTO | null)[] = [];
    constructor(assignables: AssignableDTO[], answerMap: AnswerIndexer[], answerSheet: (AnswerSheetItemDTO | null)[], position: number, type: string, dirty?: boolean) {
        super(position, type, dirty);
        this.assignables = assignables;
        this.answerMap = answerMap;
        this.answerSheet = answerSheet;
    }
    static builder() {
        return new RCSentence_Builder();
    }
    clone(): RCSentence {
        return new RCSentence(JSONDeepCopy.deepCopy(this.assignables), JSONDeepCopy.deepCopy(this.answerMap), JSONDeepCopy.deepCopy(this.answerSheet), this.position, this.type, this.dirty)
    }
}

