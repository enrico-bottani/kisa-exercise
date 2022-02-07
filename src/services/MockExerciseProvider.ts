import { ExerciseSingleChoice, SingleChoiceSentence, SingleChoiceAnswerable, SingleChoiceAnswer, Answer, Assignable, StringConstant } from "../models/ExerciseSingleChoice";

class DummyExerciseProvider {


    strings0: StringConstant[] = [
        {
            index: 1,
            type: "string",
            value: "The act"
        } as StringConstant,

        {
            index: 2,
            type: "string",
            value: "test"
        } as StringConstant,
    ]
    
    strings1: StringConstant[] = [
        {
            index: 1,
            type: "string",
            value: "We are "
        } as StringConstant,

        {
            index: 2,
            type: "string",
            value: "the world"
        } as StringConstant,
    ]
    questions: SingleChoiceAnswerable[] = [{
        index: 0,
        type: "singleChoice",
        choices: ["of", "on"]
    } as SingleChoiceAnswerable
    ]
    answers: SingleChoiceAnswer[] = [
        {
            type: "singleChoice",
            answerIndex: 1,
            status: -1
        }
    ]

    answers1: SingleChoiceAnswer[] = [
        {
            type: "singleChoice",
            answerIndex: 0,
            status: -1
        }
    ]

    singleChoiceSentence0: SingleChoiceSentence = {
        number: 0,
        answerables: this.questions,
        strings: this.strings0,
        answers: this.answers,
    }
    singleChoiceSentence1: SingleChoiceSentence = {
        number: 1,
        answerables: this.questions,
        strings: this.strings1,
        answers: this.answers,
    }
    a: ExerciseSingleChoice = {
        title: "Put in the correct preposition",
        id: 90987890,
        selected: 0,
        sentences: [
            this.singleChoiceSentence0,this.singleChoiceSentence1
        ]
    };
    public getExercise(): ExerciseSingleChoice {
        return this.a;
    }
}
export default DummyExerciseProvider;