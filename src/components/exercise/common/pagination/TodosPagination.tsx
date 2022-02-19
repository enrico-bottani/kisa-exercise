
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
  let add = <></>
  if (props.newDraft !== undefined) {
    add = <TodoNewSentenceButton text='Add new' newDraft={props.newDraft}></TodoNewSentenceButton>
  }
  var listItems = props.excercise.sentences.map(function (sentence) {
    return (<TodoPage
      key={sentence.number}
      representingTodoNumber={sentence.number}
      currentTodoNumber={props.excerciseNumber}
      errorsNumber={-1}
      onSetSelected={props.onSetExercise}></TodoPage>)
  });
  listItems.push(<TodoPageGenericButton<void> onClick={props.newDraft} label={'+'} btnClass={''} param={undefined} sign={undefined} id={''}></TodoPageGenericButton>)

  return (<>{listItems}</>)
}
export default TodosPagination;
