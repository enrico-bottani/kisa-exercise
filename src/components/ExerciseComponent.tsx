import ExerciseNumerator from './ExerciseNumerator';
import ExerciseSentence from './ExerciseSentence';
import styles from './Exercise.module.css';
import { useEffect, useState } from 'react';
import DummyExerciseProvider from '../services/MockExerciseProvider';
import ExerciseSingleChoiceSolution, { ExerciseSingleChoiceSolutionMap } from '../models/ExerciseSolutionsGrind';
import { ExerciseSingleChoice } from '../models/ExerciseSingleChoice';
function ExerciseComponent() {
    var e = new DummyExerciseProvider().getExercise();
    console.log("getting again...")
    const [excercise, setExcercise] = useState<ExerciseSingleChoice>(e);
    const [excerciseNumber, setExcerciseNumber] = useState<number>(e.selected); 
    console.log("exNum: "+excerciseNumber)
    useEffect(() => {
        console.log("rerendering")
        //var e = new DummyExerciseProvider().getExercise();
        //setExcercise(e);
    }, [excerciseNumber]);
    return (<div>
        
        <div className="container">
            <div className="row">
                <div className="col">

                    <h1 className='mb-3'>Put in the correct preposition ({excerciseNumber})</h1>

                </div>

            </div>
            <ExerciseNumerator excercise={excercise} excerciseNumber={excerciseNumber} onSetExercise={setExcerciseNumber}></ExerciseNumerator>
            <ExerciseSentence singleChoiceSentence={excercise.sentences[excerciseNumber]}></ExerciseSentence>
            <div className="row gx-1">

                <div className="col-auto">
                    <button type="button" className="btn btn-light rounded-0"><i className="bi bi-arrow-left-circle"></i></button>
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-primary rounded-0">Check this</button>
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-light rounded-0"><i className="bi bi-arrow-right-circle"></i></button>
                </div>

            </div>
            <hr className={styles.SentenceBorderBottom}></hr>
        </div>
    </div>)
}
export default ExerciseComponent;