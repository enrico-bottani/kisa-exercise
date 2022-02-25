import Exercise from "../../models/exercise/Exercise";
import {ExerciseDTO} from "../../dtos/exercise/ExerciseDTO";
import IExerciseProvider from "./IExerciseProvider";
import ExerciseMapper from "../../mappers/exercise/ExerciseMapper";

class ExerciseProvider implements IExerciseProvider {
    getExercise(exerciseID: number): Promise<Exercise> {
        return fetch("http://localhost:8081/exercise/4", {method: "GET"})
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

        return fetch("http://localhost:8081/exercises.json", {method: "GET"})
            .then((response) => {
                if (!response.ok) {
                    // Response == 404 etc..
                    throw new Error("Connection error");
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

    }

}

export default ExerciseProvider;