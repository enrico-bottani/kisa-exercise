import { RCAnswerableDTO, RCExerciseDTO } from "../../dtos/DTOs";

export interface NewDraftResponse {
    message: string,
    success: boolean
}

export interface NewDraftAble {
    newDraft: () => NewDraftResponse;
}

export interface RCAnswerableEditable {
    onRCAnswerableEdit: (answerableId: number, answerableDTO: RCAnswerableDTO) => void;
}

export interface RCBodyEditable {
    onRCBodyEdit: (sentenceId: number, body: string) => void;
}

interface EditorExerciseControls extends NewDraftAble, RCBodyEditable, RCAnswerableEditable {
}
export default EditorExerciseControls;