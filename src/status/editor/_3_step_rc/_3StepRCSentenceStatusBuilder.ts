import SubmittableRCSentenceDTO from "../../../dtos/SubmittableRCSentenceDTO";
import { AnswerIndexer, AnswerSheetItemDTO, AssignableDTO, RCAnswerableDTO, RCSentenceDTO, StringConstantDTO } from "../../../dtos/DTOs";
import ExerciseType from "../../../models/ExerciseType";
class StatusBuilderException {
    message: string;
    constructor(message: string) {
        this.message = message;
    }
}

class ThreeStepRCSentenceStatusBuilder {
    bodyParseError = -1;
    step: number = 0;
    sentenceId: number = -1;
    indexer: AnswerIndexer[] = [];
    assigns: AssignableDTO[] = [];
    answerSheet: AnswerSheetItemDTO[] = [];
    getStep(): number {
        return this.step;
    }

    build() {
        return SubmittableRCSentenceDTO.builder()
            .setNumber(this.sentenceId)
            .setAnswerMap(this.indexer)
            .setAssignables(this.assigns)
            .setAnswerSheet(this.answerSheet).build();
    }


    parseBody(sentenceId: number, body: string, setAnsw?: (nOfGaps: number) => string[][], setAnswSheet?: (nOfGaps: number) => AnswerSheetItemDTO[]): ThreeStepRCSentenceStatusBuilder {
        if (this.step !== 0) return this;
        this.sentenceId = sentenceId;
        // Ricevo la stringa e la divido in più parole
        const words = body.split('..');
        // Ottengo il numero di domande da fare (e risposte)
        const nOfAnswers = words.length - 1;
        if (nOfAnswers === 0) {
            this.step = this.bodyParseError;
        }
        // Se la domanda è il primo elemento salto la stringa vuota
        let skipFirstString = false;
        if (words[0] === "") skipFirstString = true;

        // Popolo assigns e answer. Attenzione che assigns non è completo. Verrà riservato il posto per
        // Scrivere le domande, ma queste verranno poi effettivamente scritte nello stato 2
        for (let i = 0; i < words.length; i++) {
            let str: StringConstantDTO = { type: ExerciseType.String, value: words[i] }
            if (skipFirstString) {
                skipFirstString = false;
            }
            else {
                this.assigns.push(str)
            }
            if (i + 1 < words.length) {
                let str: RCAnswerableDTO = { type: ExerciseType.RCAnswerable, choices: [] }
                this.assigns.push(str)
                this.indexer.push({ index: this.assigns.length - 1 } as AnswerIndexer)
            }
        }


        this.step = 1;

        if (setAnsw !== undefined) this.setAnswers(setAnsw(nOfAnswers));
        if (setAnswSheet !== undefined) this.setAnswerSheet(setAnswSheet(nOfAnswers))
        return this;
    }
    setAnswers(answers: string[][]): ThreeStepRCSentenceStatusBuilder {
        if (this.step !== 1) return this;

        if (answers.length !== this.indexer.length) {
            throw new StatusBuilderException(`Inconsistent number of answer exception: 
            expected [${this.indexer.length}], given [${answers.length}]`)
        }

        answers.forEach((choices, index) => {
            let i = this.indexer[index].index;
            if (choices.length < 2) {
                this.step = -2;
                throw new StatusBuilderException(`Invalid number of choices. At least 2 options must be present`);
            }
            (this.assigns[i] as RCAnswerableDTO).choices = choices;
        })


        this.step = 2;
        return this;
    }
    setAnswerSheet(answerSheet: AnswerSheetItemDTO[]): ThreeStepRCSentenceStatusBuilder {
        if (this.step !== 2) return this;
        this.answerSheet = answerSheet;

        this.step = 3;
        return this;
    }
    static parseToStr(rcSentenceDTO: RCSentenceDTO): string {
        if (rcSentenceDTO.assignables === undefined) return "";
        let parseResult = rcSentenceDTO.assignables.map((item) => {
            if (item.type === ExerciseType.String) {
                return (item as StringConstantDTO).value;
            }
            else if (item.type === ExerciseType.RCAnswerable) {
                return "..";
            }
            else return "";
        }).join('')

        return parseResult;
    }
}
export default ThreeStepRCSentenceStatusBuilder;