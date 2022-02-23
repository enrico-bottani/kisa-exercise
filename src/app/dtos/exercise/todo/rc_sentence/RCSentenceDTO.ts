import { AnswerSheetItemDTO, AssignableDTO } from "../../../DTOs";
import { TodoDTO } from "../TodoDTO";


export interface RCSentenceDTO extends TodoDTO {
    assignables: AssignableDTO[];
    answerSheet: (AnswerSheetItemDTO | null)[];
}
