import { TodoDTO } from "../../dtos/exercise/todo/TodoDTO";
import { ExerciseDTO } from "../../dtos/exercise/ExerciseDTO";
import Todo from "./todo/Todo";
import { RCSentence } from "./todo/rc_sentence/RCSentence";
import { I_RCSentenceDTO } from "../../dtos/exercise/todo/rc_sentence/I_RCSentenceDTO";

class ExerciseDTOImpl_Builder {
    id: number = -1;
    title: string = "";
    selected: number = 0;
    todos: Todo[] = [];

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
    public setTodo(todos: Todo[]): ExerciseDTOImpl_Builder {
        this.todos = todos;
        return this;
    }

    public setTodosFromDtos(e: TodoDTO[]): ExerciseDTOImpl_Builder {
        // For each todo
        let todo = e.map(td => {
            // Get the type
            if (td.type === Todo.Type.RCSentenceType) {
                let rcSentence = td as I_RCSentenceDTO;
                return RCSentence.builder()
                    .setPosition(rcSentence.position)
                    .setType(rcSentence.type)
                    .setDirty(rcSentence.dirty === true)
                    .setAssignables(rcSentence.assignables)
                    .setAnswerMap(rcSentence.answerMap)
                    .setAnswerSheet(rcSentence.answerSheet).build();
            }
            else return new Todo(td.position, td.type, td.dirty)
        });
        this.setTodo(todo);
        return this;
    }

    build(): Exercise {
        return new Exercise(this.id, this.title, this.selected, this.todos);
    }
}

// Implementa ExerciseDTO, se devo ritornare il tipo di dato è corretto
export class Exercise implements ExerciseDTO {
    id: number = -1;
    title: string = "";
    selected: number = 0;
    todos: Todo[] = [];

    constructor(id: number, title: string, selected: number, todos: Todo[]) {
        this.id = id;
        this.title = title;
        this.selected = selected;
        this.todos = todos;
    }

    clone(): Exercise {
        return new Exercise(this.id, this.title, this.selected, JSON.parse(JSON.stringify(this.todos)));

    }

    public static builder(): ExerciseDTOImpl_Builder {
        return new ExerciseDTOImpl_Builder();
    }
}

export default Exercise;