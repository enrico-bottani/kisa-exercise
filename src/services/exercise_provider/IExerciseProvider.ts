import { ExerciseDTO } from "../../dtos/DTOs";

interface IExerciseProvider {
    getExercise(exerciseID: number): Promise<ExerciseDTO>;
}
export default IExerciseProvider;