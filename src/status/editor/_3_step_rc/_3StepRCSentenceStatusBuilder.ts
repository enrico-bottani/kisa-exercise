import RCSentenceModel from "../../../models/editor/RCSentence";
import { AnswerIndexer, AnswerSheet, Assignable, RCAnswerable, StringConstant } from "../../../models/ExerciseSingleChoice";

class StatusBuilderException {
    message: string;
    constructor(message: string) {
        this.message = message;
    }
}

class _3StepRCSentenceStatusBuilder {
    bodyParseError = -1;
    step: number = 0;
    indexer: AnswerIndexer[] = [];
    assigns: Assignable[] = [];
    answerSheet: AnswerSheet[] = [];
    getStep(): number {
        return this.step;
    }

    build() {
        return RCSentenceModel.builder()
            .setAnswerMap(this.indexer)
            .setAssignables(this.assigns)
            .setAnswerSheet(this.answerSheet).build();
    }

    parseBody(body: string): _3StepRCSentenceStatusBuilder {
        if (this.step != 0) return this;


        // Ricevo la stringa e la divido in più parole
        const words = body.split('..');
        // Ottengo il numero di domande da fare (e risposte)
        const nOfAnswers = words.length - 1;
        if (nOfAnswers == 0) {
            this.step = this.bodyParseError;
        }
        // Se la domanda è il primo elemento salto la stringa vuota
        let skipFirstString = false;
        if (words[0] == "") skipFirstString = true;

        // Popolo assigns e answer. Attenzione che assigns non è completo. Verrà riservato il posto per
        // Scrivere le domande, ma queste verranno poi effettivamente scritte nello stato 2
        for (let i = 0; i < words.length; i++) {
            let str: StringConstant = { type: "String", value: words[i] }
            if (skipFirstString) {
                skipFirstString = false;
            }
            else {
                this.assigns.push(str)
            }
            if (i + 1 < words.length) {
                let str: RCAnswerable = { type: "SingleChoiceAnswerable", choices: [] }
                this.assigns.push(str)
                this.indexer.push({ index: this.assigns.length - 1 } as AnswerIndexer)
            }
        }


        this.step = 1;
        return this;
    }
    setAnswers(answers: string[][]): _3StepRCSentenceStatusBuilder {
        if (this.step != 1) return this;

        if (answers.length != this.indexer.length) {
            throw new StatusBuilderException(`Inconsistent number of answer exception: 
            expected [${this.indexer.length}], given [${answers.length}]`)
        }

        answers.forEach((choices, index) => {
            let i = this.indexer[index].index;
            if (choices.length < 2) {
                this.step = -2;
                throw new StatusBuilderException(`Invalid number of choices. At least 2 options must be present`);
            }
            (this.assigns[i] as RCAnswerable).choices = choices;
        })


        this.step = 2;
        return this;
    }
    setAnswerSheet(answerSheet: AnswerSheet[]): _3StepRCSentenceStatusBuilder {
        if (this.step != 2) return this;
        this.answerSheet = answerSheet;

        this.step = 3;
        return this;
    }
}
export default _3StepRCSentenceStatusBuilder;