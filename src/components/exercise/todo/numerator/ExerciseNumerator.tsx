
import styles from './ExerciseNumerator.module.css';
import { RCExercise } from '../../../../models/ExerciseSingleChoice'
import ExerciseSingleChoiceSolution from '../../../../models/ExerciseSolutionsGrind'
import TodoNumber from './number/TodoNumber'
interface Props {
  excercise: RCExercise;
  excerciseNumber: number;
  onSetExercise: any;
}

function ExerciseNumerator(props: Props) {
  let setSelected = function (n: number) {
    props.onSetExercise(n);
  }

  var listItems = props.excercise.sentences.map(function (sentence) {
    return (<TodoNumber
      key={sentence.number}
      representingTodoNumber={sentence.number} 
      currentTodoNumber={props.excerciseNumber} 
      errorsNumber={-1} 
      onSetSelected={props.onSetExercise}></TodoNumber>)
  });

  return (<div>
    <div className="row mb-3 gx-1 align-baseline">
      {listItems}
    </div>
  </div>)
}
export default ExerciseNumerator;
