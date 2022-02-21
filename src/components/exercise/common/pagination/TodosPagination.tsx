
import { IExerciseDTO } from '../../../../dtos/exercise/IExerciseDTO';
import { NewDraftResponse } from '../../../../models/editor/EditorExerciseControls';
import TodoType from '../../../../models/TodoType';
import TodoPage from './number/TodoPage'
import TodoPageGenericButton from './number/TodoPageGenericButton';
interface Props {
  excercise: IExerciseDTO;
  excerciseNumber: number;
  onSetExercise: any;
  createNewDraft(type: TodoType): NewDraftResponse
}

function TodosPagination(props: Props) {
  var listItems = props.excercise.todos.map((sentence, i) => {
    return (<TodoPage
      key={"todo-page-" + i}
      representingTodoNumber={sentence.position}
      currentTodoNumber={props.excerciseNumber}
      errorsNumber={-1}
      onSetSelected={props.onSetExercise}></TodoPage>)
  });
  listItems.push(<TodoPageGenericButton<TodoType>
    key={"todo-page--1"}
    onClick={props.createNewDraft}
    label={'+'} btnClass={''}
    param={TodoType.RCSentenceType} sign={undefined} id={''}></TodoPageGenericButton>)

  return (<>{listItems}</>)
}
export default TodosPagination;
