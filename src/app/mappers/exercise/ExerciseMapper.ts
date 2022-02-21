import { ExerciseDTO } from "../../dtos/exercise/ExerciseDTO";
import Exercise from "../../models/exercise/Exercise";

class ExerciseMapper {
    static map(e: ExerciseDTO): Exercise {
        return Exercise.builder().setId(e.id).setSelected(e.selected).setTitle(e.title).setTodosFromDtos(e.todos).build();
    }
}