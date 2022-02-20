
import { RCExerciseDTO } from '../../../../dtos/DTOs';
import { NewDraftResponse } from '../../../../models/editor/EditorExerciseControls';
import TodoNewSentenceButton from './editor/TodoNewSentenceButton';
import TodoPage from './number/TodoPage'
import TodoPageGenericButton from './number/TodoPageGenericButton';
interface Props {
  excercise: RCExerciseDTO;
  excerciseNumber: number;
  onSetExercise: any;
  newDraft: () => NewDraftResponse;
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
  listItems.push(<TodoPageGenericButton<void>
    key={"todo-page--1"}
    onClick={props.newDraft}
    label={'+'} btnClass={''}
    param={undefined} sign={undefined} id={''}></TodoPageGenericButton>)

  return (<>{listItems}</>)
}
export default TodosPagination;
