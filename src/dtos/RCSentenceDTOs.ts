import ThreeStepRCSentenceStatusBuilder from "../status/editor/_3_step_rc/_3StepRCSentenceStatusBuilder";
import { RCAnswerableDTO, RCSentenceDTO } from "./DTOs";

export class RCSentenceDTOs {

    static extractChoices(oldRCSentence: RCSentenceDTO): string[][] {
        var prevQuestions = oldRCSentence.answerMap.map(indexer => {
            return (oldRCSentence.assignables[indexer.index] as RCAnswerableDTO).choices;
        })
        return prevQuestions;
    }

}