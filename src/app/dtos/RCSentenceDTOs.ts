import { RCAnswerableDTO } from "./DTOs";
import { I_RCSentenceDTO } from "./todo/rc_sentence/I_RCSentenceDTO";

export class RCSentenceDTOs {

    static extractChoices(oldRCSentence: I_RCSentenceDTO): string[][] {
        var prevQuestions = oldRCSentence.answerMap.map(indexer => {
            return (oldRCSentence.assignables[indexer.index] as RCAnswerableDTO).choices;
        })
        return prevQuestions;
    }

}