import {useEffect, useState} from "react";
import {ExerciseDTO} from "../../../../dtos/exercise/ExerciseDTO";
import {RCSentenceDTO} from "../../../../dtos/exercise/todo/rc_sentence/RCSentenceDTO";
import RCSentenceMapper from "../../../../mappers/exercise/RCSentenceMapper";
import {NewDraftResponse} from "../../../../models/editor/EditorExerciseControls";
import Exercise from "../../../../models/exercise/Exercise";
import {RCSentence} from "../../../../models/exercise/todo/rc_sentence/RCSentence";
import ExerciseProvider from "../../../../services/exercise_provider/ExerciseProvider";
import Navigation from "../../common/nav/Navigation";
import TodosPagination from "../../common/pagination/TodosPagination";
import RCSentenceEditor from "./sentence/RCSentenceEditor";
import styles from "./RCExerciseEditor.module.css";
import Todo from "../../../../models/exercise/todo/Todo";
import MockExerciseProvider from "../../../../services/exercise_provider/MockExerciseProvider";

interface Props {
    exerciseId: number;
}

function ExerciseEditor(props: Props) {

    //////////////////////////////////////////////
    ///                  Hooks                 ///
    //////////////////////////////////////////////
    const [exercise, setExercise] = useState<Exercise>(new Exercise(-1,"",0,[]));
    const [excerciseNumber, setExcerciseNumber] = useState<number>(0);

    useEffect(() => {
        console.log("useEffect");
        if (props.exerciseId !== -1) {
            new ExerciseProvider().getExercise(props.exerciseId)
                .then(fe => setExercise(oldExercise => {
                    if(fe==null){
                        console.error("Warning, invalid exercise selected");
                        return oldExercise;
                    }
                    return fe;
                }));
        }
    }, [props.exerciseId])

    //////////////////////////////////////////////
    ///                Callback                ///
    //////////////////////////////////////////////
    function createNewDraft(type: Todo.Type): NewDraftResponse {
        setExercise(ex => _createNewDraftByType(ex, type));
        return {message: "ok", success: true};
    }

    function setStageTodoChangesByOrder(todoOrder: number, todoToEdit: RCSentenceDTO) {
        setExercise(e =>
            cloneExerciseAndSetSentence(e, todoOrder, todoToEdit))
    }

    //////////////////////////////////////////////
    ///                   JSX                  ///
    //////////////////////////////////////////////

    let rtn = <div className="container">
        <div className="row">
            <div className="col"><h1>Loading...</h1></div>
        </div>
    </div>
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

    function cloneExerciseAndSetSentence(e: Exercise, order: number, rcSentenceDTO: RCSentenceDTO) {
        let rtn: Exercise = e.clone();
        rtn.todos[order] = RCSentenceMapper.map(rcSentenceDTO);
        rtn.todos[order].dirty = true;
        console.log(JSON.stringify(rtn as ExerciseDTO));
        return rtn;
    }

    function _createNewDraftByType(ex: Exercise, type: Todo.Type) {
        let e = ex.clone();
        let number = e.todos[e.todos.length - 1].position + 1;
        switch (type) {
            case Todo.Type.RCSentenceType:
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