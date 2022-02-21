import ExerciseDTO from "../../dtos/exercise/ExerciseDTO";
import { IExerciseDTO } from "../../dtos/exercise/IExerciseDTO";
import IExerciseProvider from "./IExerciseProvider";

class ExerciseProvider implements IExerciseProvider {
    getExercise(exerciseID: number): Promise<IExerciseDTO> {
        throw new Error("Method not implemented.");
    }

    getExercises(): Promise<IExerciseDTO[]> {
        return fetch("http://localhost:8081/exercises", { method: "GET" })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json() as Promise<IExerciseDTO[]>
            })
            .then(exDto => {
                return exDto.map(e => {
                    return ExerciseDTO.builder()
                        .setId(e.id)
                        .setTitle(e.title)
                        .setSelected(e.selected)
                        .setTodoDTO(e.todos).build()
                })
            })
            .catch(e => e);
    }

}
export default ExerciseProvider;