export interface ExerciseSingleChoice {
    id: number;
    title: string;
    selected: number;
    sentences: SingleChoiceSentence[];
}
export interface SingleChoiceSentence {
    number: number;
    begin: number,
    status: number,// 0 = not submitted, 1 = correct, 2 wrong
    refs: [
        String[],
        Answerable[]
    ];
    answers: Answer[]
}

export interface RefCoord{
    array: number;
    index: number;
}

export interface Answerable {
    index: number,
    type: string;
}
export interface SingleChoiceAnswerable extends Answerable{
    choices: String[]
}

export interface Answer {
    type: string;
}
export interface SingleChoiceAnswer {
    type: string;
    responseIndex: number;
}
