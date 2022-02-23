import Exercise from "../../models/exercise/Exercise";
import { ExerciseDTO } from "../../dtos/exercise/ExerciseDTO";
import IExerciseProvider from "./IExerciseProvider";
import Todo from "../../models/exercise/todo/Todo";
import TodoType from "../../models/TodoType";
import { I_RCSentenceDTO } from "../../dtos/exercise/todo/rc_sentence/I_RCSentenceDTO";
import { RCSentence } from "../../models/exercise/todo/rc_sentence/RCSentence";
import ExerciseMapper from "../../mappers/exercise/ExerciseMapper";

class ExerciseProvider implements IExerciseProvider {
    getExercise(exerciseID: number): Promise<Exercise> {
        return fetch("http://localhost:8081/exercise/4", { method: "GET" })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json() as Promise<ExerciseDTO>
            })
            .then(exDto => {
                return ExerciseMapper.map(exDto, 0);
            })
            .catch(e => e);
    }

    getExercises(): Promise<Exercise[]> {
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
                        .setSelected(0)
                        .setTodosFromDtos(e.todos).build()
                })
            })
            .catch(e => e);
    }

}
export default ExerciseProvider;