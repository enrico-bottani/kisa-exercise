
export interface ITodoDTO {
    position: number;
    type: string;
    dirty?: boolean;
}

export interface RCSentenceDTO extends ITodoDTO {
    assignables: AssignableDTO[];
    answerMap: AnswerIndexer[];
    answerSheet: (AnswerSheetItemDTO | null)[];

}
// ASSIGNABLES
export interface AssignableDTO {
    type: string;
}

export interface StringConstantDTO extends AssignableDTO {
    value: string;
}


export interface RCAnswerableDTO extends AssignableDTO {
    choices: string[]
}

export interface AnswerIndexer {
    index: number;
}

export interface AnswerSheetItemDTO {
    givenAnswerID: number;
    correctAnswerID: number;
    status: number; // 0 = not submitted, 1 = correct, 2 wrong
}

