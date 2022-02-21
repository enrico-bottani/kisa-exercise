import { RCAnswerableDTO } from "./DTOs";
import { RCSentenceDTO } from "./todo/rc_sentence/RCSentenceDTO";

export class RCSentenceDTOs {

    static extractChoices(oldRCSentence: RCSentenceDTO): string[][] {
        var prevQuestions = oldRCSentence.answerMap.map(indexer => {
            return (oldRCSentence.assignables[indexer.index] as RCAnswerableDTO).choices;
        })
        return prevQuestions;
    }

}