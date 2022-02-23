import { AnswerSheetItemDTO, AssignableDTO } from "../../../DTOs";
import { TodoDTO } from "../TodoDTO";


export interface I_RCSentenceDTO extends TodoDTO {
    assignables: AssignableDTO[];
    answerSheet: (AnswerSheetItemDTO | null)[];
}
