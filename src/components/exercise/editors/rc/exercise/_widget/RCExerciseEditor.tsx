import { useState } from "react";
import { RCExerciseDTO, RCSentenceDTO } from "../../../../../../dtos/DTOs";
import EditorExerciseControls, { NewDraftResponse } from "../../../../../../models/editor/EditorExerciseControls";
import DummyExerciseProvider from "../../../../../../services/MockExerciseProvider";
import ExerciseHeading from "../../../../common/heading/ExerciseHeading";
import Navigation from "../../../../common/nav/Navigation";
import TodosPagination from "../../../../common/pagination/TodosPagination";
import RCSentenceEditor from "../sentence/_widget/RCSentenceEditor";
import styles from "./RCExerciseEditor.module.css"

function Exercise() {

    // Setting STATES
    // [Convention] Exercise with id == -1: uninitialized
    const [exercise, setExercise] = useState<RCExerciseDTO>(DummyExerciseProvider.EMPTY);
    const [excerciseNumber, setExcerciseNumber] = useState<number>(exercise.selected);
    const [draft, setDraft] = useState<RCSentenceDTO | null>(null);

    new DummyExerciseProvider().getExercise(90987890).then((e) => setExercise(e));

    function createNewDraft(): NewDraftResponse {
        let number = exercise.sentences[exercise.sentences.length - 1].number + 1;
        setExercise(e => {
            e.sentences.push({ number: number, assignables: [], answerMap: [], answerSheet: [] });
            setExcerciseNumber(n => {
                return e.sentences.length + 1;
            });
            return e;
        });
        return { message: "ok", success: true };
    }


    let onRCSentenceEdit = function (id: number, answerableDTO: RCSentenceDTO) {
        setExercise(e => {
            e.sentences[id] = answerableDTO;
            let rtn = Object.assign({}, e);
            console.log("Exercise: ", rtn);
            return rtn;
        })
    }

    let rtn = <div className="container"><div className="row"><div className="col"><h1>Loading...</h1></div></div></div>

    if (exercise.id !== -1) {
        rtn = (<div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ExerciseHeading>Put in the correct preposition</ExerciseHeading>
                    </div>
                </div>
                <div>
                    <div className={"row mb-3 gx-1 align-baseline"}>
                        <TodosPagination
                            newDraft={createNewDraft}
                            excercise={exercise}
                            excerciseNumber={excerciseNumber}
                            onSetExercise={setExcerciseNumber}></TodosPagination>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <RCSentenceEditor
                            onRCSentenceEdit={onRCSentenceEdit}
                            rcSentenceDTO={exercise.sentences[excerciseNumber]}></RCSentenceEditor>
                    </div>
                </div>
                <Navigation></Navigation>
                <hr className={styles.SentenceBorderBottom}></hr>
            </div>
        </div>)
    }


    return (rtn)
}
export default Exercise;