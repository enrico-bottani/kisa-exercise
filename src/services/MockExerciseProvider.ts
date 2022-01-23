import { ExerciseSingleChoice, SingleChoiceSentence, SingleChoiceAnswerable, SingleChoiceAnswer, Answer, Assignable, StringConstant } from "../models/ExerciseSingleChoice";

class DummyExerciseProvider {


    singleChoice: Assignable[] = [
        {
            index: 1,
            type: "string",
            value: "The act"
        } as StringConstant,
        {
            index: 0,
            type: "singleChoice",
            choices: ["of", "on"]
        } as SingleChoiceAnswerable,
        {
            index: 2,
            type: "string",
            value: "test"
        } as StringConstant,
    ]
    singleChoice1: Assignable[] = [
        {
            index: 0,
            type: "singleChoice",
            choices: ["In", "On"]
        } as SingleChoiceAnswerable,
        {
            index: 1,
            type: "string",
            value: "Australia we have kangaroos."
        } as StringConstant,
    ]

    answers: SingleChoiceAnswer[] = [
        {
            type: "singleChoice",
            responseIndex: 1
        }
    ]



    singleChoiceSentence: SingleChoiceSentence = {
        number: 0,
        status: 0,
        begin: 0,
        refs: this.singleChoice,
        answers: this.answers,
    }
    singleChoiceSentence1: SingleChoiceSentence = {
        number: 1,
        status: 1,
        begin: 1,
        refs: this.singleChoice1,
        answers: this.answers,
    }


    a: ExerciseSingleChoice = {
        title: "Put in the correct preposition",
        id: 90987890,
        selected: 0,
        sentences: [
            this.singleChoiceSentence, this.singleChoiceSentence1
        ]
    };
    public getExercise(): ExerciseSingleChoice {
        return this.a;
    }
}
export default DummyExerciseProvider;