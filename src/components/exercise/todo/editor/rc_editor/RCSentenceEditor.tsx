
import { RCAnswerable, RCSentenceDTO, StringConstantDTO } from '../../../../../dtos/DTOs';
import ExerciseType from '../../../../../models/ExerciseType';
import RCOptions from '../../assignable/RCOptions/RCOptions';
import StringElement from '../../assignable/StringElement';
import styles from './RCSentenceEditor.module.css'
import RCChoicesEditor from './RCChoicesEditor';
import EditorStep from '../utils/EditorStep';
import RCEditorPreviewWrapper from './preview/RCEditorPreviewWrapper';
import RCGapsEditor from './gaps_editor/RCGapsEditor';

interface Props {
    rcSentenceDTO: RCSentenceDTO;
    onSingleChoiceAnswerableChange: (singleChoiceSentence: RCSentenceDTO, save: boolean) => boolean;
}



function RCSentenceEditor({ rcSentenceDTO: singleChoiceSentence, onSingleChoiceAnswerableChange }: Props) {

    onSingleChoiceAnswerableChange(singleChoiceSentence, false);
    let marginTop = 3;
    return (
        <div className={styles.EditorFrame}>
            <EditorStep number={1} title="Write the body:">
                <input type="text"
                    className={"form-control col " + styles.EditorSubStepFirstInput}
                    id="exampleFormControlTextarea1"
                    value={"We are ... world."}></input>
            </EditorStep>

            <EditorStep number={2} title="Formulate the questions:" marginTop={marginTop}>
                <RCGapsEditor></RCGapsEditor>
            </EditorStep>
            <EditorStep number={3} title="Solve it:" marginTop={marginTop}>
                <RCEditorPreviewWrapper rcSentenceDTO={singleChoiceSentence} onSingleChoiceAnswerableChange={onSingleChoiceAnswerableChange}></RCEditorPreviewWrapper>
            </EditorStep>
            <EditorStep number={4} title="Save:" marginTop={marginTop}>
                <div className="container">
                    <div className="row">
                        <button className={'btn btn-primary rounded-0 col col-auto me-1 ' + styles.EditorButtonPrimaryBorderLeft} disabled>Save</button>
                        <button disabled className='btn btn-outline-danger rounded-0 me-1 col col-auto'>Discharge changes</button>
                    </div>
                </div>
            </EditorStep>
        </div>)
}
export default RCSentenceEditor;