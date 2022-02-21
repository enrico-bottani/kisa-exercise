import { ITodoDTO } from "../../../dtos/exercise/todo/ITodoDTO";
import SentenceType from "../../ExerciseType";

class Todo implements ITodoDTO {
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