import { ExerciseDTO } from "../../dtos/exercise/ExerciseDTO";
import Exercise from "../../models/exercise/Exercise";

class ExerciseMapper {
    static map(e: ExerciseDTO, selected: number): Exercise {
        return Exercise.builder().setId(e.id).setSelected(selected).setTitle(e.title).setTodosFromDtos(e.todos).build();
    }
}

export default ExerciseMapper;