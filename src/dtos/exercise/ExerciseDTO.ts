import { ITodoDTO } from "../todo/ITodoDTO";
import { IExerciseDTO } from "./IExerciseDTO";

class ExerciseDTOImpl_Builder {
    id: number = -1;
    title: string = "";
    selected: number = 0;
    todos: ITodoDTO[] = [];

    public setId(id: number): ExerciseDTOImpl_Builder {
        this.id = id;
        return this;
    }
    public setTitle(title: string): ExerciseDTOImpl_Builder {
        this.title = title;
        return this;
    }
    public setSelected(selected: number): ExerciseDTOImpl_Builder {
        this.selected = selected;
        return this;
    }
    public setTodoDTO(todos: ITodoDTO[]): ExerciseDTOImpl_Builder {
        this.todos = todos;
        return this;
    }
    build(): ExerciseDTO {
        return new ExerciseDTO(this.id, this.title, this.selected, this.todos);
    }
}


class ExerciseDTO implements IExerciseDTO {
    id: number = -1;
    title: string = "";
    selected: number = 0;
    todos: ITodoDTO[] = [];

    constructor(id: number, title: string, selected: number, todos: ITodoDTO[]) {
        this.id = id;
        this.title = title;
        this.selected = selected;
        this.todos = todos;
    }

    clone() {
        let title = Object.assign({}, this.title)
        new ExerciseDTO(this.id, title, this.selected, JSON.parse(JSON.stringify(this.todos)));
    }

    public static builder(): ExerciseDTOImpl_Builder {
        return new ExerciseDTOImpl_Builder();
    }
}

export default ExerciseDTO;