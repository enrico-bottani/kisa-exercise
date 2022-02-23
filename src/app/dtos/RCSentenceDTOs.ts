import { RCSentence } from "../models/exercise/todo/rc_sentence/RCSentence";
import { RCAnswerableDTO } from "./DTOs";
import { I_RCSentenceDTO } from "./exercise/todo/rc_sentence/I_RCSentenceDTO";

export class RCSentenceDTOs {

    static extractChoices(oldRCSentence: RCSentence): string[][] {
        var prevQuestions = oldRCSentence.answerMap.map(indexer => {
            return (oldRCSentence.assignables[indexer.index] as RCAnswerableDTO).choices;
        })
        return prevQuestions;
    }

}