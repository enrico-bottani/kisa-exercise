import { RCAnswerableDTO, RCExerciseDTO, RCSentenceDTO } from "../../dtos/DTOs";

export interface NewDraftResponse {
    message: string,
    success: boolean
}

export interface NewDraftAble {
    newDraft: () => NewDraftResponse;
}


export interface RCSentenceEditable {
    onRCSentenceEdit: (sentenceId: number, rcSentenceDTO: RCSentenceDTO) => void;
}

export interface RCBodyEditable {
    onRCBodyEdit: (sentenceId: number, body: string) => void;
}

interface EditorExerciseControls extends NewDraftAble, RCSentenceEditable {
}
export default EditorExerciseControls;