import ExerciseNumerator from './todo/numerator/ExerciseNumerator';
import SingleChoiceSentenceElement from './todo/SingleChoiceSentenceElement';
import styles from './ExerciseElement.module.css';
import { useEffect, useState } from 'react';
import DummyExerciseProvider from '../../services/MockExerciseProvider';
import ExerciseSingleChoiceSolution, { ExerciseSingleChoiceSolutionMap } from '../../models/ExerciseSolutionsGrind';
import { RCExercise, RCSentence } from '../../models/ExerciseSingleChoice';
import Navigation from './nav/Navigation';
import RadioSentenceEditor from './todo/radioSentence/RadioSentenceEditor';


/* Here the exercise is loaded from the api*/

function ExerciseElement() {
    var e = new DummyExerciseProvider().getExercise();
    const [excercise, setExcercise] = useState<RCExercise>(e);
    const [excerciseNumber, setExcerciseNumber] = useState<number>(e.selected);
    let onSingleChoice = function (s: RCSentence): boolean {
        return true;
    }
    useEffect(() => {
    }, [excerciseNumber]);
    return (<div>

        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className='mb-3'>Put in the correct preposition ({excerciseNumber})</h1>
                </div>
            </div>
            <ExerciseNumerator excercise={excercise} excerciseNumber={excerciseNumber} onSetExercise={setExcerciseNumber}></ExerciseNumerator>
            <div className={"row mb-3"}>
                <div className="col">
                    <RadioSentenceEditor onSingleChoiceAnswerableChange={onSingleChoice} singleChoiceSentence={excercise.sentences[excerciseNumber]}></RadioSentenceEditor>
                </div>
            </div>

            <Navigation></Navigation>
            <hr className={styles.SentenceBorderBottom}></hr>
        </div>
    </div>)
}
export default ExerciseElement;