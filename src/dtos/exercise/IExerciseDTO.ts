import { ITodoDTO } from "../todo/ITodoDTO";


export interface IExerciseDTO {
    id: number;
    title: string;
    selected: number;
    todos: ITodoDTO[];
}