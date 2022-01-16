import ExerciseNumerator from './ExerciseNumerator';
import ExerciseSentence from './ExerciseSentence';
import styles from './Exercise.module.css';
import { useEffect, useState } from 'react';
import DummyExerciseProvider from '../services/MockExerciseProvider';
import ExerciseSingleChoiceSolution, { ExerciseSingleChoiceSolutionMap } from '../models/ExerciseSolutionsGrind';
import { ExerciseSingleChoice } from '../models/ExerciseSingleChoice';
function ExerciseComponent() {

    const [excercise, setExcercise] = useState<ExerciseSingleChoice>(
        {
            id: 0, title: "", sentences: []
        });
    const [solutionGrid, setSolutionGrid] = useState<ExerciseSingleChoiceSolution[]>(
        [
            {
                choiceId: 1, sentenceId: 1, exerciseId: 1, status: 0, choosenSolutionId: 0
            },
            {
                choiceId: 1, sentenceId: 2, exerciseId: 1, status: 0, choosenSolutionId: 0
            }]);

    useEffect(() => {
        var e = new DummyExerciseProvider().getExercise();
        setExcercise(e);
    }, []);
    var e = new ExerciseSingleChoiceSolutionMap(solutionGrid);
    console.log("solution map: ", e);
    console.log("get: ", e.get({ choiceId: 1, exerciseId: 1, sentenceId: 2 }))
    return (<div>
        <div className="container">
            <div className="row">
                <div className="col">

                    <h1 className='mb-3'>Put in the correct preposition</h1>

                </div>

            </div>
            <ExerciseNumerator excercise={excercise} solutionGrid={solutionGrid}></ExerciseNumerator>
            <ExerciseSentence></ExerciseSentence>
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