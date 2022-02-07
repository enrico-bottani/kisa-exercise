export interface ExerciseSingleChoice {
    id: number;
    title: string;
    selected: number;
    sentences: SingleChoiceSentence[];
}
export interface SingleChoiceSentence {
    number: number;
    strings: StringConstant[];
    answerables: SingleChoiceAnswerable[];
    answers: Answer[]
}

export interface Assignable{
    index: number;
    type: string;
}

export interface StringConstant extends Assignable{
    value: string;
}


export interface SingleChoiceAnswerable extends Assignable{
    choices: String[]
}

export interface Answer {
    type: string;
    status: number; // 0 = not submitted, 1 = correct, 2 wrong
}
export interface SingleChoiceAnswer extends Answer {
    answerIndex: number;
}
