import styles from './TodoNewSentenceButton.module.css';
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

    return (<button className={'btn btn-outline-secondary border-4 rounded-0 w-100 ' + styles.AddNewButton} onClick={addNew}>{text}</button>)
}
export default TodoNewSentenceButton;
