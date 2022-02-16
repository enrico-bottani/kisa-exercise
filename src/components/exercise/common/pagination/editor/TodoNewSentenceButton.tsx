
import { NewDraftAble } from '../../../../../models/editor/EditorExerciseControls';
interface Props {
    text: string;
    newDraft?: NewDraftAble;
}

function TodoNewSentenceButton({ newDraft, text }: Props) {

    function addNew(): void {
        if (newDraft !== undefined)
            newDraft.newDraft();
    }

    return (<button onClick={addNew}>{text}</button>)
}
export default TodoNewSentenceButton;
