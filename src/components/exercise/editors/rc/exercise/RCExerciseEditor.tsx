import { useEffect, useState } from "react";
import { RCExerciseDTO, RCSentenceDTO } from "../../../../../dtos/DTOs";
import { NewDraftAble, NewDraftResponse } from "../../../../../models/editor/EditorExerciseControls";
import DummyExerciseProvider from "../../../../../services/MockExerciseProvider";
import ExerciseHeading from "../../../common/heading/ExerciseHeading";
import Navigation from "../../../common/nav/Navigation";
import TodosPagination from "../../../common/pagination/TodosPagination";
import RCSentenceEditor from "../RCSentenceEditor";
import styles from "./RCExerciseEditor.module.css"

function Exercise() {
    var e = new DummyExerciseProvider().getExercise();
    const [excercise, setExercise] = useState<RCExerciseDTO>(e);
    const [excerciseNumber, setExcerciseNumber] = useState<number>(e.selected);

    let onSingleChoice = function (s: RCSentenceDTO): boolean {
        return true;
    }
    let f = function (): NewDraftResponse {
        console.log("Something here...")
        let number = e.sentences[e.sentences.length - 1].number + 1;
        setExcerciseNumber(number);
        e.sentences.push({ number: number, assignables: [], answerMap: [], answerSheet: [] });
        setExercise(e)
        return { message: "ok", success: true };
    }
    useEffect(() => {
    }, [excerciseNumber, excercise]);


    let newDraft: NewDraftAble = {
        newDraft: f
    }
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
                        newDraft={newDraft}
                        excercise={excercise}
                        excerciseNumber={excerciseNumber}
                        onSetExercise={setExcerciseNumber}></TodosPagination>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <RCSentenceEditor
                        onSingleChoiceAnswerableChange={onSingleChoice}
                        rcSentenceDTO={excercise.sentences[excerciseNumber]}></RCSentenceEditor>
                </div>
            </div>
            <Navigation></Navigation>
            <hr className={styles.SentenceBorderBottom}></hr>
        </div>
    </div>)
}
export default Exercise;