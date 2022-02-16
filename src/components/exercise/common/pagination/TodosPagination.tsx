
import { RCExerciseDTO } from '../../../../dtos/DTOs';
import { NewDraftAble } from '../../../../models/editor/EditorExerciseControls';
import TodoNewSentenceButton from './editor/TodoNewSentenceButton';
import TodoPage from './number/TodoPage'
interface Props {
  excercise: RCExerciseDTO;
  excerciseNumber: number;
  onSetExercise: any;
  newDraft?: NewDraftAble;
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

  return (<>{listItems}{add}</>)
}
export default TodosPagination;
