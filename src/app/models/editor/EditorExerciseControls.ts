import { I_RCSentenceDTO } from "../../dtos/exercise/todo/rc_sentence/I_RCSentenceDTO";

export interface NewDraftResponse {
    message: string,
    success: boolean
}

export interface NewDraftAble {
    newDraft: () => NewDraftResponse;
}


export interface RCSentenceEditable {
    onRCSentenceEdit: (sentenceId: number, rcSentenceDTO: I_RCSentenceDTO) => void;
}

export interface RCBodyEditable {
    onRCBodyEdit: (sentenceId: number, body: string) => void;
}

interface EditorExerciseControls extends RCSentenceEditable {
}
export default EditorExerciseControls;