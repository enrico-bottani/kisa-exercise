import { RCExerciseDTO } from "../../dtos/DTOs";

export interface NewDraftResponse {
    message: string,
    success: boolean
}

export interface NewDraftAble {
    newDraft: () => NewDraftResponse;
}

interface EditorExerciseControls extends NewDraftAble {
    pushExercise: (rcExerciseDTO: RCExerciseDTO) => number,
    putExercise: (id: number, rcExerciseDTO: RCExerciseDTO) => number,
}
export default EditorExerciseControls;