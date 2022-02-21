import { useEffect, useState } from "react";
import { RCSentenceDTO } from "../../../../../dtos/DTOs";
import { IExerciseDTO } from "../../../../../dtos/exercise/IExerciseDTO";
import { NewDraftResponse } from "../../../../../models/editor/EditorExerciseControls";
import TodoType from "../../../../../models/TodoType";
import DummyExerciseProvider from "../../../../../services/exercise_provider/MockExerciseProvider";
import Navigation from "../../../common/nav/Navigation";
import TodosPagination from "../../../common/pagination/TodosPagination";

import styles from "./RCExerciseEditor.module.css"
import RCSentenceEditor from "./sentence/RCSentenceEditor";

function Exercise() {

    // Setting STATES
    // [Convention] Exercise with id == -1: uninitialized
    const [exercise, setExercise] = useState<IExerciseDTO>(DummyExerciseProvider.EMPTY);
    const [excerciseNumber, setExcerciseNumber] = useState<number>(exercise.selected);
    const [draft, setDraft] = useState<RCSentenceDTO | null>(null);

    useEffect(() => {
        new DummyExerciseProvider().getExercise(90987890)
            .then((fetchedExercise) => setExercise(e => { return fetchedExercise }));
    })
    function createNewDraft(type: TodoType): NewDraftResponse {
        let number = exercise.todos[exercise.todos.length - 1].position + 1;
        setExercise(e => {
            switch (type) {
                case TodoType.RCSentenceType:
                    e.todos.push({ position: number, type: type, assignables: [], answerMap: [], answerSheet: [] } as RCSentenceDTO);
                    setExcerciseNumber(e.todos[e.todos.length - 1].position);
                    return e;
                default:
                    return e;
            }
        });
        return { message: "ok", success: true };
    }

    // The only way to ask the parent to persist in the database the changes.
    // Calling this method stages the changes.
    let stageRCSentenceEdits = function (id: number, answerableDTO: RCSentenceDTO) {
        setExercise(e => {
            console.log("Staging:  ", answerableDTO)
            let rtn = Object.assign({}, e);
            rtn.todos[id] = answerableDTO;
            rtn.todos[id].dirty = true;
            return rtn;
        })
    }

    let rtn = <div className="container"><div className="row"><div className="col"><h1>Loading...</h1></div></div></div>

    if (exercise.id !== -1) {
        rtn = (<div>
            <div className="container">
                <div>
                    <div className={"row mb-3 gx-1 align-baseline"}>
                        <TodosPagination
                            createNewDraft={createNewDraft}
                            excercise={exercise}
                            excerciseNumber={excerciseNumber}
                            onSetExercise={setExcerciseNumber}></TodosPagination>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        {// In futuro andrà fatto uno switch in base al tipo di TODO
                        }
                        <RCSentenceEditor
                            stageRCSentenceEdits={stageRCSentenceEdits}
                            rcSentenceDTO={exercise.todos[excerciseNumber] as RCSentenceDTO}></RCSentenceEditor>
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