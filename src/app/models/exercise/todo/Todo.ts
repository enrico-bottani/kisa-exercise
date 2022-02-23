import { TodoDTO } from "../../../dtos/exercise/todo/TodoDTO";
import SentenceType from "../../ExerciseType";

class Todo implements TodoDTO {
    position: number = -1;
    type: string = SentenceType.Undefined;
    dirty?: boolean = false;

    constructor(position: number, type: string, dirty?: boolean) {
        this.position = position;
        this.type = type;
        this.dirty = dirty;
    }

    clone(): Todo {
        return new Todo(this.position, this.type, this.dirty);
    }
}
export default Todo;