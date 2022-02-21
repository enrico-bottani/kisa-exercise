import { ExerciseDTO } from "../../dtos/DTOs";
import IExerciseProvider from "./IExerciseProvider";

class ExerciseProvider implements IExerciseProvider {
    getExercise(exerciseID: number): Promise<ExerciseDTO> {
        throw new Error("Method not implemented.");
    }

}
export default ExerciseProvider;