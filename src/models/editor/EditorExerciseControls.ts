import { RCSentenceDTO } from "../../dtos/todo/rc_sentence/RCSentenceDTO";

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

interface EditorExerciseControls extends RCSentenceEditable {
}
export default EditorExerciseControls;