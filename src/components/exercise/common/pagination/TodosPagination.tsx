
import { ExerciseDTO } from '../../../../dtos/DTOs';
import { NewDraftResponse } from '../../../../models/editor/EditorExerciseControls';
import TodoType from '../../../../models/TodoType';
import TodoNewSentenceButton from './editor/TodoNewSentenceButton';
import TodoPage from './number/TodoPage'
import TodoPageGenericButton from './number/TodoPageGenericButton';
interface Props {
  excercise: ExerciseDTO;
  excerciseNumber: number;
  onSetExercise: any;
  createNewDraft(type: TodoType): NewDraftResponse
}

function TodosPagination(props: Props) {
  var listItems = props.excercise.sentences.map((sentence, i) => {
    return (<TodoPage
      key={"todo-page-" + i}
      representingTodoNumber={sentence.id}
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
