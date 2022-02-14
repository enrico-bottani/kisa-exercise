export interface RCExercise {
    id: number;
    title: string;
    selected: number;
    sentences: RCSentence[];
}
export interface RCSentence {
    number: number;
    assignables: Assignable[];
    answerMap: AnswerIndexer[];
    answerSheet: AnswerSheet[];
}

// ASSIGNABLES
export interface Assignable {
    type: string;
}

export interface StringConstant extends Assignable {
    value: string;
}


export interface RCAnswerable extends Assignable {
    choices: string[]
}



export interface AnswerIndexer {
    index: number;
}
export interface RCAnswerIndexer extends AnswerIndexer {
    answerIndex: number;
}

export interface AnswerSheet {
    givenAnswer: number;
    status: number; // 0 = not submitted, 1 = correct, 2 wrong
}

