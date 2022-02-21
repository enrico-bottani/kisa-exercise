import { ITodoDTO } from "./todo/ITodoDTO";


export interface ExerciseDTO {
    id: number;
    title: string;
    selected: number;
    todos: ITodoDTO[];
}