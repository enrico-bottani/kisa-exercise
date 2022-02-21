import { AnswerIndexer, AssignableDTO, ExerciseDTO, RCAnswerableDTO, RCSentenceDTO, StringConstantDTO } from "../../dtos/DTOs";
import ExerciseType from "../../models/ExerciseType";
import TodoType from "../../models/TodoType";
import IExerciseProvider from "./IExerciseProvider";

class DummyExerciseProvider implements IExerciseProvider {

    static strings0: AssignableDTO[] = [
        {
            id: 1,
            type: ExerciseType.String,
            value: "Lucy is arriving "
        } as StringConstantDTO,
        {
            id: 2,
            type: ExerciseType.RCAnswerable,
            choices: ["in", "on", "0"]
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

    static strings1: AssignableDTO[] = [
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
    static answers: AnswerIndexer[] = [
        {
            index: 1,
        },
        {
            index: 3,
        },
        {
            index: 5,
        }
    ]

    static answers1: AnswerIndexer[] = [
        {
            index: 1,
        }
    ]

    static singleChoiceSentence0: RCSentenceDTO = {
        position: 0,
        type: TodoType.RCSentenceType,
        assignables: this.strings0,
        answerMap: this.answers,
        answerSheet: [null, null]
    }
    static singleChoiceSentence1: RCSentenceDTO = {
        position: 1,
        type: TodoType.RCSentenceType,
        assignables: this.strings1,
        answerMap: this.answers1,
        answerSheet: []
    }
    static exercise: ExerciseDTO = {
        title: "Put in the correct preposition",
        id: 90987890,
        selected: 0,
        sentences: [
            this.singleChoiceSentence0, this.singleChoiceSentence1
        ]
    };

    static exercises = [DummyExerciseProvider.exercise];
    static EMPTY: ExerciseDTO = {
        id: -1,
        title: "",
        selected: 0,
        sentences: []
    }

    public putSentence(exerciseId: number, sentenceNumber: number, exercise: RCSentenceDTO): Promise<any> {
        // Find the sentence to modify
        let exercises = DummyExerciseProvider.exercises;
        return new Promise<any>((resolve, reject) => {
            setTimeout(function () {
                for (let j = 0; j < exercises.length; j++) {
                    if (exercises[j].id === exerciseId) {
                        let sentences = exercises[j].sentences;
                        for (let i = 0; i < sentences.length; i++) {
                            if (sentences[i].position === sentenceNumber) {
                                sentences[i] = exercise;
                                resolve({ status: 200 }
                                )  // Yay! Everything went well!
                            }
                            else reject({ status: 404 })
                        }
                    }
                }
                reject({ status: 404 })
            }, 10)
        })

    }

    privateGetExercise(exerciseID: number): ExerciseDTO | null {
        let exercises = DummyExerciseProvider.exercises;

        for (let j = 0; j < exercises.length; j++) {
            if (exercises[j].id === exerciseID) {
                return (exercises[j])
            }
        }
        return null;
    }

    public getExercise(exerciseID: number): Promise<ExerciseDTO> {
        let exercises = DummyExerciseProvider.exercises;

        return new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                let exercise = this.privateGetExercise(exerciseID);
                if (exercise !== null)
                    resolve(exercise);
                resolve(null)
            }, 10
            )
        })
    }
}
export default DummyExerciseProvider;