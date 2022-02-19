import styles from './TodoNewSentenceButton.module.css';
import { NewDraftResponse } from '../../../../../models/editor/EditorExerciseControls';
interface Props {
    text: string;
    newDraft: () => NewDraftResponse;
}

function TodoNewSentenceButton({ newDraft, text }: Props) {

    function addNew(): void {
        if (newDraft !== undefined)
            newDraft();
    }

    return (<button className={'btn btn-outline-secondary border-4 rounded-0 w-100 ' + styles.AddNewButton} onClick={addNew}>{text}</button>)
}
export default TodoNewSentenceButton;
