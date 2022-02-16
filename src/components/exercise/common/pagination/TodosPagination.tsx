
import { RCExerciseDTO } from '../../../../dtos/DTOs';
import TodoPage from './number/TodoPage'
interface Props {
  excercise: RCExerciseDTO;
  excerciseNumber: number;
  onSetExercise: any;
}

function TodosPagination(props: Props) {
  let setSelected = function (n: number) {
    props.onSetExercise(n);
  }

  var listItems = props.excercise.sentences.map(function (sentence) {
    return (<TodoPage
      key={sentence.number}
      representingTodoNumber={sentence.number}
      currentTodoNumber={props.excerciseNumber}
      errorsNumber={-1}
      onSetSelected={props.onSetExercise}></TodoPage>)
  });

  return (<>{listItems}</>)
}
export default TodosPagination;
