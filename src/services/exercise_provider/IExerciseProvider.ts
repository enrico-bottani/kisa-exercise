import { IExerciseDTO } from "../../dtos/exercise/IExerciseDTO";

interface IExerciseProvider {
    getExercise(exerciseID: number): Promise<IExerciseDTO>;
}
export default IExerciseProvider;