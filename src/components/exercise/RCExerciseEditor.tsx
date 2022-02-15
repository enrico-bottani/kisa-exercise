import ExerciseNumbers from './todo/numerator/ExerciseNumerator';
import styles from './RCExerciseEditor.module.css';
import { useEffect, useState } from 'react';
import DummyExerciseProvider from '../../services/MockExerciseProvider';
import { RCExerciseDTO, RCSentenceDTO } from '../../dtos/DTOs';
import Navigation from './nav/Navigation';
import RCSentenceEditor from './todo/editor/rc_editor/RCSentenceEditor';
import ExerciseHeading from './heading/ExerciseHeading';


function Exercise() {
    var e = new DummyExerciseProvider().getExercise();
    const [excercise] = useState<RCExerciseDTO>(e);
    const [excerciseNumber, setExcerciseNumber] = useState<number>(e.selected);
    let onSingleChoice = function (s: RCSentenceDTO): boolean {
        return true;
    }
    useEffect(() => {
    }, [excerciseNumber]);
    return (<div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <ExerciseHeading></ExerciseHeading>
                </div>
            </div>
            <div>
                <div className={"row mb-3 gx-1 align-baseline"}>
                    <ExerciseNumbers excercise={excercise}
                        excerciseNumber={excerciseNumber}
                        onSetExercise={setExcerciseNumber}></ExerciseNumbers>
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