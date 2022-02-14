import { RCExerciseDTO, RCSentenceDTO, RCAnswerable, AssignableDTO, StringConstantDTO, RCAnswerIndexer } from "../dtos/DTOs";
import ExerciseType from "../models/ExerciseType";

class DummyExerciseProvider {

    strings0: AssignableDTO[] = [
        {
            id: 1,
            type: ExerciseType.String,
            value: "We are "
        } as StringConstantDTO,
        {
            id: 0,
            type: ExerciseType.RCAnswerable,
            choices: ["in", "a"]
        } as RCAnswerable,
        {
            id: 2,
            type: ExerciseType.String,
            value: " world"
        } as StringConstantDTO,
    ]

    strings1: AssignableDTO[] = [
        {
            id: 1,
            type: ExerciseType.String,
            value: "We are "
        } as StringConstantDTO,
        {
            id: 0,
            type: ExerciseType.RCAnswerable,
            choices: ["the", "a"]
        } as RCAnswerable,
        {
            id: 2,
            type: ExerciseType.String,
            value: " world"
        } as StringConstantDTO,
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

    singleChoiceSentence0: RCSentenceDTO = {
        number: 0,
        assignables: this.strings0,
        answerMap: this.answers,
        answerSheet: []
    }
    singleChoiceSentence1: RCSentenceDTO = {
        number: 1,
        assignables: this.strings1,
        answerMap: this.answers1,
        answerSheet: []
    }
    a: RCExerciseDTO = {
        title: "Put in the correct preposition",
        id: 90987890,
        selected: 0,
        sentences: [
            this.singleChoiceSentence0, this.singleChoiceSentence1
        ]
    };
    public getExercise(): RCExerciseDTO {
        return this.a;
    }
}
export default DummyExerciseProvider;