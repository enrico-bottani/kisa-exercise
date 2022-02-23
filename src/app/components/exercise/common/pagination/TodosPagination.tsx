
import { ExerciseDTO } from '../../../../dtos/exercise/ExerciseDTO';
import { NewDraftResponse } from '../../../../models/editor/EditorExerciseControls';
import Todo from '../../../../models/exercise/todo/Todo';
import TodoPage from './number/TodoPage'
import TodoPageGenericButton from './number/TodoPageGenericButton';
interface Props {
  excercise: ExerciseDTO;
  excerciseNumber: number;
  onSetExercise: any;
  createNewDraft(type: Todo.Type.RCSentenceType): NewDraftResponse
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
  listItems.push(<TodoPageGenericButton<Todo.Type>
    key={"todo-page--1"}
    onClick={props.createNewDraft}
    label={'+'} btnClass={''}
    param={Todo.Type.RCSentenceType} sign={undefined} id={''}></TodoPageGenericButton>)

  return (<>{listItems}</>)
}
export default TodosPagination;
