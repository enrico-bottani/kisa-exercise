import { AnswerIndexer, AssignableDTO, RCAnswerableDTO, StringConstantDTO } from "../../dtos/DTOs";
import { ExerciseDTO } from "../../dtos/exercise/ExerciseDTO";
import { I_RCSentenceDTO } from "../../dtos/exercise/todo/rc_sentence/I_RCSentenceDTO";
import ExerciseMapper from "../../mappers/exercise/ExerciseMapper";
import Exercise from "../../models/exercise/Exercise";
import Todo from "../../models/exercise/todo/Todo";
import SentenceType from "../../models/ExerciseType";
import IExerciseProvider from "./IExerciseProvider";

class DummyExerciseProvider implements IExerciseProvider {

    static strings0: AssignableDTO[] = [
        {
            id: 1,
            type: SentenceType.String,
            value: "Lucy is arriving "
        } as StringConstantDTO,
        {
            id: 2,
            type: SentenceType.RCAnswerable,
            choices: ["in", "on", "0"]
        } as RCAnswerableDTO,
        {
            id: 3,
            type: SentenceType.String,
            value: " February the 13th "
        } as StringConstantDTO,
        {
            id: 4,
            type: SentenceType.RCAnswerable,
            choices: ["in", "on", "at"]
        } as RCAnswerableDTO,
        {
            id: 5,
            type: SentenceType.String,
            value: " eight o'clock "
        } as StringConstantDTO,
        {
            id: 4,
            type: SentenceType.RCAnswerable,
            choices: ["of", "on", "in"]
        } as RCAnswerableDTO,
        {
            id: 5,
            type: SentenceType.String,
            value: " the morning."
        } as StringConstantDTO,
    ]

    static strings1: AssignableDTO[] = [
        {
            id: 1,
            type: SentenceType.String,
            value: "We are "
        } as StringConstantDTO,
        {
            id: 0,
            type: SentenceType.RCAnswerable,
            choices: ["the", "a"]
        } as RCAnswerableDTO,
        {
            id: 2,
            type: SentenceType.String,
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

    static singleChoiceSentence0: I_RCSentenceDTO = {
        position: 0,
        type: Todo.Type.RCSentenceType,
        assignables: this.strings0,
        answerMap: this.answers,
        answerSheet: [null, null]
    }
    static singleChoiceSentence1: I_RCSentenceDTO = {
        position: 1,
        type: Todo.Type.RCSentenceType,
        assignables: this.strings1,
        answerMap: this.answers1,
        answerSheet: []
    }
    static exercise: ExerciseDTO = {
        id: 90987890,
        title: "Put in the correct preposition",
        todos: [
            this.singleChoiceSentence0, this.singleChoiceSentence1
        ]
    } as ExerciseDTO;

    static exercises = [DummyExerciseProvider.exercise];

    public putSentence(exerciseId: number, sentenceNumber: number, exercise: I_RCSentenceDTO): Promise<any> {
        // Find the sentence to modify
        let exercises = DummyExerciseProvider.exercises;
        return new Promise<any>((resolve, reject) => {
            setTimeout(function () {
                for (let j = 0; j < exercises.length; j++) {
                    if (exercises[j].id === exerciseId) {
                        let sentences = exercises[j].todos;
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

    public getExercise(exerciseID: number): Promise<Exercise> {
        return new Promise<any>((resolve, reject) => {
            setTimeout(() => {
                let exercise = this.privateGetExercise(exerciseID);
                if (exercise !== null)
                    resolve(ExerciseMapper.map(exercise, 0));
                resolve(null)
            }, 10
            )
        })
    }
}
export default DummyExerciseProvider;