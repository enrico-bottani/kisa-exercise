import { TodoDTO } from "./todo/TodoDTO";


export interface ExerciseDTO {
    id: number;
    title: string;
    todos: TodoDTO[];
}