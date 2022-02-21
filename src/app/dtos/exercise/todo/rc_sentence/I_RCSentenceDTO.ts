import { AnswerIndexer, AnswerSheetItemDTO, AssignableDTO } from "../../../DTOs";
import { ITodoDTO } from "../ITodoDTO";


export interface I_RCSentenceDTO extends ITodoDTO {
    assignables: AssignableDTO[];
    answerMap: AnswerIndexer[];
    answerSheet: (AnswerSheetItemDTO | null)[];
}
