import { RCExercise, RCSentence, RCAnswerable, Assignable, StringConstant, AnswerSheet, AnswerIndexer, RCAnswerIndexer } from "../models/ExerciseSingleChoice";

class DummyExerciseProvider {

    strings0: Assignable[] = [
        {
            id: 1,
            type: "String",
            value: "We are "
        } as StringConstant,
        {
            id: 0,
            type: "SingleChoiceAnswerable",
            choices: ["in", "a"]
        } as RCAnswerable,
        {
            id: 2,
            type: "String",
            value: " world"
        } as StringConstant,
    ]

    strings1: Assignable[] = [
        {
            id: 1,
            type: "String",
            value: "We are "
        } as StringConstant,
        {
            id: 0,
            type: "SingleChoiceAnswerable",
            choices: ["the", "a"]
        } as RCAnswerable,
        {
            id: 2,
            type: "String",
            value: " world"
        } as StringConstant,
    ]
    answers: RCAnswerIndexer[] = [
        {
            answerIndex: 1,
            index: 0
        }
    ]

    answers1: RCAnswerIndexer[] = [
        {
            answerIndex: 1,
            index: 0
        }
    ]

    singleChoiceSentence0: RCSentence = {
        number: 0,
        assignables: this.strings0,
        answerMap: this.answers,
        answerSheet: []
    }
    singleChoiceSentence1: RCSentence = {
        number: 1,
        assignables: this.strings1,
        answerMap: this.answers1,
        answerSheet: []
    }
    a: RCExercise = {
        title: "Put in the correct preposition",
        id: 90987890,
        selected: 0,
        sentences: [
            this.singleChoiceSentence0, this.singleChoiceSentence1
        ]
    };
    public getExercise(): RCExercise {
        return this.a;
    }
}
export default DummyExerciseProvider;