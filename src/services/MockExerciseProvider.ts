import { RCExerciseDTO, RCSentenceDTO, RCAnswerableDTO, AssignableDTO, StringConstantDTO, AnswerIndexer } from "../dtos/DTOs";
import ExerciseType from "../models/ExerciseType";

class DummyExerciseProvider {

    strings0: AssignableDTO[] = [
        {
            id: 1,
            type: ExerciseType.String,
            value: "Lucy is arriving "
        } as StringConstantDTO,
        {
            id: 2,
            type: ExerciseType.RCAnswerable,
            choices: ["in", "on", "for"]
        } as RCAnswerableDTO,
        {
            id: 3,
            type: ExerciseType.String,
            value: " February the 13th "
        } as StringConstantDTO,
        {
            id: 4,
            type: ExerciseType.RCAnswerable,
            choices: ["in", "on", "at"]
        } as RCAnswerableDTO,
        {
            id: 5,
            type: ExerciseType.String,
            value: " eight o'clock "
        } as StringConstantDTO,
        {
            id: 4,
            type: ExerciseType.RCAnswerable,
            choices: ["of", "on", "in"]
        } as RCAnswerableDTO,
        {
            id: 5,
            type: ExerciseType.String,
            value: " the morning."
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
        } as RCAnswerableDTO,
        {
            id: 2,
            type: ExerciseType.String,
            value: " world"
        } as StringConstantDTO,
    ]
    answers: AnswerIndexer[] = [
        {
            index: 1,
        }
    ]

    answers1: AnswerIndexer[] = [
        {
            index: 1,
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