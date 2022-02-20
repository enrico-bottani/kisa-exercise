export interface RCExerciseDTO {
    id: number;
    title: string;
    selected: number;
    sentences: RCSentenceDTO[];
}
export interface RCSentenceDTO {
    id: number;
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
    givenAnswer: number;
    status: number; // 0 = not submitted, 1 = correct, 2 wrong
}

