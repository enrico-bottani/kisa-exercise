
import { RCExerciseDTO } from '../../../dtos/DTOs';
import styles from './ExerciseNumerator.module.css';
import TodoNumber from './number/TodoNumber'
interface Props {
  excercise: RCExerciseDTO;
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

  return (<>{listItems}</>)
}
export default ExerciseNumerator;
