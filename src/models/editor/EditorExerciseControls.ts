import { RCExerciseDTO } from "../../dtos/DTOs";

export interface NewDraftResponse {
    message: string,
    success: boolean
}

export interface NewDraftAble {
    newDraft: () => NewDraftResponse;
}

export interface RCBodyEditable {
    onRCBodyEdit: (sentenceId: number, body: string) => void;
}

interface EditorExerciseControls extends NewDraftAble, RCBodyEditable {
}
export default EditorExerciseControls;