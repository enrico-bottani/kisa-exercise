import { ITodoDTO } from "../DTOs";


export interface IExerciseDTO {
    id: number;
    title: string;
    selected: number;
    todos: ITodoDTO[];
}