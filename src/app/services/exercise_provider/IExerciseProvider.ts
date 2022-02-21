import { ExerciseDTO } from "../../dtos/exercise/ExerciseDTO";

interface IExerciseProvider {
    getExercise(exerciseID: number): Promise<ExerciseDTO>;
}
export default IExerciseProvider;