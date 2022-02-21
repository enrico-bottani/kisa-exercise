import Exercise from "../../models/exercise/Exercise";
import { ExerciseDTO } from "../../dtos/exercise/ExerciseDTO";
import IExerciseProvider from "./IExerciseProvider";
import Todo from "../../models/exercise/todo/Todo";
import TodoType from "../../models/TodoType";
import { I_RCSentenceDTO } from "../../dtos/exercise/todo/rc_sentence/I_RCSentenceDTO";
import { RCSentence } from "../../models/exercise/todo/rc_sentence/RCSentence";

class ExerciseProvider implements IExerciseProvider {
    getExercise(exerciseID: number): Promise<ExerciseDTO> {
        throw new Error("Method not implemented.");
    }

    getExercises(): Promise<ExerciseDTO[]> {
        return fetch("http://localhost:8081/exercises", { method: "GET" })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json() as Promise<ExerciseDTO[]>
            })
            .then(exDto => {
                return exDto.map(e => {
                    return Exercise.builder()
                        .setId(e.id)
                        .setTitle(e.title)
                        .setSelected(e.selected)
                        .setTodosFromDtos(e.todos).build()
                })
            })
            .catch(e => e);
    }

}
export default ExerciseProvider;