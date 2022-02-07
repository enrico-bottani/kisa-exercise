import ExerciseNumerator from './todo/numerator/ExerciseNumerator';
import SingleChoiceSentenceElement from './todo/SingleChoiceSentenceElement';
import styles from './ExerciseElement.module.css';
import { useEffect, useState } from 'react';
import DummyExerciseProvider from '../../services/MockExerciseProvider';
import ExerciseSingleChoiceSolution, { ExerciseSingleChoiceSolutionMap } from '../../models/ExerciseSolutionsGrind';
import { ExerciseSingleChoice } from '../../models/ExerciseSingleChoice';
import Navigation from './nav/Navigation';


/* Here the exercise is loaded from the api*/

function ExerciseElement() {
    var e = new DummyExerciseProvider().getExercise();
    const [excercise, setExcercise] = useState<ExerciseSingleChoice>(e);
    const [excerciseNumber, setExcerciseNumber] = useState<number>(e.selected); 
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
            <SingleChoiceSentenceElement singleChoiceSentence={excercise.sentences[excerciseNumber]}></SingleChoiceSentenceElement>
            <Navigation></Navigation>
            <hr className={styles.SentenceBorderBottom}></hr>
        </div>
    </div>)
}
export default ExerciseElement;