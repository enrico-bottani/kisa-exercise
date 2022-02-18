import { useEffect, useState } from "react";
import { RCExerciseDTO, RCSentenceDTO } from "../../../../../dtos/DTOs";
import EditorExerciseControls, { NewDraftAble, NewDraftResponse } from "../../../../../models/editor/EditorExerciseControls";
import DummyExerciseProvider from "../../../../../services/MockExerciseProvider";
import _3StepRCSentenceStatusBuilder from "../../../../../status/editor/_3_step_rc/_3StepRCSentenceStatusBuilder";
import ExerciseHeading from "../../../common/heading/ExerciseHeading";
import Navigation from "../../../common/nav/Navigation";
import TodosPagination from "../../../common/pagination/TodosPagination";
import RCSentenceEditor from "../RCSentenceEditor";
import styles from "./RCExerciseEditor.module.css"

function Exercise() {

    const [e, setExercise] = useState<RCExerciseDTO>(new DummyExerciseProvider().getExercise());
    const [excerciseNumber, setExcerciseNumber] = useState<number>(e.selected);



    let onSingleChoice = function (s: RCSentenceDTO): boolean {
        return true;
    }
    function createNewDraft(): NewDraftResponse {
        let number = e.sentences[e.sentences.length - 1].number + 1;
        setExcerciseNumber(number);
        e.sentences.push({ number: number, assignables: [], answerMap: [], answerSheet: [] });
        setExercise(e);
        return { message: "ok", success: true };
    }

    function onRCBodyEdit(sentenceId: number, body: string) {
        setExercise(
            oldEVal => {

                let sentenceToUpdate = oldEVal.sentences[sentenceId];
                var prevQuestions = sentenceToUpdate.answerMap.map(indexer => {
                    return (sentenceToUpdate.assignables[indexer.index])
                })

                var _3StepRCBuilder = new _3StepRCSentenceStatusBuilder();
                let newSentence = _3StepRCBuilder.parseBody(body).build();

                newSentence.answerMap.forEach((indexer, i) => {
                    if (i < prevQuestions.length) {
                        newSentence.assignables[indexer.index] = prevQuestions[i];
                    }
                    // TODO: Improve efficency when i>=pre.length
                })

                oldEVal.sentences[sentenceId] = newSentence;
                console.log(oldEVal.sentences[sentenceId].assignables[2])
                oldEVal = JSON.parse(JSON.stringify(oldEVal))
                return oldEVal;
            }
        )
        // Parse into components
    }

    const [eeControls, setEEControls] = useState<EditorExerciseControls>({
        newDraft: createNewDraft,
        onRCBodyEdit: onRCBodyEdit
    });

    return (<div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <ExerciseHeading>Put in the correct preposition</ExerciseHeading>
                </div>
            </div>
            <div>
                <div className={"row mb-3 gx-1 align-baseline"}>
                    <TodosPagination
                        newDraft={eeControls}
                        excercise={e}
                        excerciseNumber={excerciseNumber}
                        onSetExercise={setExcerciseNumber}></TodosPagination>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <RCSentenceEditor
                        eeControls={eeControls}
                        onSingleChoiceAnswerableChange={onSingleChoice}
                        rcSentenceDTO={e.sentences[excerciseNumber]}></RCSentenceEditor>
                </div>
            </div>
            <Navigation></Navigation>
            <hr className={styles.SentenceBorderBottom}></hr>
        </div>
    </div>)
}
export default Exercise;