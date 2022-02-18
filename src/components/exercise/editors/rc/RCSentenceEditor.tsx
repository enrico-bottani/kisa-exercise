
import styles from './RCSentenceEditor.module.css'
import { RCSentenceDTO, StringConstantDTO } from '../../../../dtos/DTOs';
import EditorStep from '../utils/EditorStep';
import RCGapsEditor from './gaps/RCGapsEditor';
import RCEditorPreviewWrapper from '../../common/todo/preview/RCEditorPreviewWrapper';
import ExerciseType from '../../../../models/ExerciseType';
import RCBodyEditor from './body/RCBodyEditor';
import EditorExerciseControls from '../../../../models/editor/EditorExerciseControls';

interface Props {
    eeControls: EditorExerciseControls;
    rcSentenceDTO: RCSentenceDTO;
    onSingleChoiceAnswerableChange: (singleChoiceSentence: RCSentenceDTO, save: boolean) => boolean;
}



function RCSentenceEditor({ eeControls, rcSentenceDTO, onSingleChoiceAnswerableChange }: Props) {
    onSingleChoiceAnswerableChange(rcSentenceDTO, false);
    let marginTop = 3;



    return (
        <div className={styles.EditorFrame}>
            <div className="container px-0">
                <div className='row gx-0 border-bottom border-2 mb-3'>
                    <div className="col"><h2>Radio Choice Editor</h2></div>
                    <div className="col-auto">
                        <div className="btn btn-outline-secondary rounded-0 border-0"><i className="bi bi-three-dots"></i></div>
                    </div>
                </div>
            </div>
            <EditorStep number={1} title="Write the body:">
                <RCBodyEditor rcBodyEditable={eeControls} rcSentenceDTO={rcSentenceDTO}></RCBodyEditor>
            </EditorStep>

            <EditorStep number={2} title="Formulate the questions:" marginTop={marginTop}>
                <RCGapsEditor eeControls={eeControls} rcSentenceDTO={rcSentenceDTO}></RCGapsEditor>
            </EditorStep>
            <EditorStep number={3} title="Solve it:" marginTop={marginTop}>
                <RCEditorPreviewWrapper rcSentenceDTO={rcSentenceDTO} onSingleChoiceAnswerableChange={onSingleChoiceAnswerableChange}></RCEditorPreviewWrapper>
            </EditorStep>
            <EditorStep number={4} title="Save:" marginTop={marginTop}>
                <>
                    <button className={'btn btn-primary rounded-0 col col-auto me-1 ' + styles.EditorButtonPrimaryBorderLeft} disabled>Save</button>
                    <button disabled className='btn btn-outline-danger rounded-0 me-1 col col-auto'>Discharge changes</button>
                </>
            </EditorStep>
        </div >)
}
export default RCSentenceEditor;