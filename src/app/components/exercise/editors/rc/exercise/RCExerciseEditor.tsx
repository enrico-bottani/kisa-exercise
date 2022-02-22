import { useEffect, useState } from "react";
import { I_RCSentenceDTO } from "../../../../../dtos/exercise/todo/rc_sentence/I_RCSentenceDTO";
import { RCSentence } from "../../../../../models/exercise/todo/rc_sentence/RCSentence";
import DummyExerciseProvider from "../../../../../services/exercise_provider/MockExerciseProvider";
import { NewDraftResponse } from "../../../../../models/editor/EditorExerciseControls";
import TodoType from "../../../../../models/TodoType";
import Navigation from "../../../common/nav/Navigation";
import TodosPagination from "../../../common/pagination/TodosPagination";

import styles from "./RCExerciseEditor.module.css"
import RCSentenceEditor from "./sentence/RCSentenceEditor";
import Exercise from "../../../../../models/exercise/Exercise";
import ExerciseMapper from "../../../../../mappers/exercise/ExerciseMapper";
import RCSentenceMapper from "../../../../../mappers/exercise/RCSentenceMapper";

function ExerciseEditor() {

    //////////////////////////////////////////////
    ///                  Hooks                 ///
    //////////////////////////////////////////////
    const [exercise, setExercise] = useState<Exercise>(Exercise.builder().build());
    const [excerciseNumber, setExcerciseNumber] = useState<number>(exercise.selected);

    useEffect(() => {
        new DummyExerciseProvider().getExercise(90987890)
            .then((fetchedExercise) => setExercise(e => { return ExerciseMapper.map(fetchedExercise) }));
    }, [])

    //////////////////////////////////////////////
    ///                Callback                ///
    //////////////////////////////////////////////
    function createNewDraft(type: TodoType): NewDraftResponse {
        setExercise(ex => _createNewDraftByType(ex, type));
        return { message: "ok", success: true };
    }

    function setStageTodoChangesByOrder(todoOrder: number, todoToEdit: I_RCSentenceDTO) {
        setExercise(e => cloneExerciseAndSetSentence(e, todoOrder, todoToEdit))
    }

    //////////////////////////////////////////////
    ///                   JSX                  ///
    //////////////////////////////////////////////

    let rtn = <div className="container"><div className="row"><div className="col"><h1>Loading...</h1></div></div></div>
    // [Convention] Exercise with id == -1: not initialized
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
                            stageRCSentenceEdits={setStageTodoChangesByOrder}
                            rcSentenceDTO={RCSentenceMapper.map(exercise.todos[excerciseNumber] as RCSentence)}></RCSentenceEditor>
                    </div>
                </div>
                <Navigation></Navigation>
                <hr className={styles.SentenceBorderBottom}></hr>
            </div>
        </div>)
    }
    return (rtn)


    //////////////////////////////////////////////
    ///       Private utility functions        ///
    //////////////////////////////////////////////

    function cloneExerciseAndSetSentence(e: Exercise, order: number, rcSentenceDTO: I_RCSentenceDTO) {
        let rtn: Exercise = e.clone();
        rtn.todos[order] = RCSentenceMapper.map(rcSentenceDTO);
        rtn.todos[order].dirty = true;
        return rtn;
    }

    function _createNewDraftByType(ex: Exercise, type: TodoType) {
        let e = ex.clone();
        let number = e.todos[e.todos.length - 1].position + 1;
        switch (type) {
            case TodoType.RCSentenceType:
                e.todos.push(RCSentence.builder()
                    .setPosition(number).setAnswerMap([]).setAnswerSheet([]).build());
                setExcerciseNumber(e.todos[e.todos.length - 1].position);
                break;
            default:
                break;
        }
        return e;
    }
}
export default ExerciseEditor;