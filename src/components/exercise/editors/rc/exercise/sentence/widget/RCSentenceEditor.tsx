
import { RCAnswerableDTO, RCSentenceDTO } from '../../../../../../../dtos/DTOs';
import { RCSentenceDTOs } from '../../../../../../../dtos/RCSentenceDTOs';
import EditorExerciseControls from '../../../../../../../models/editor/EditorExerciseControls';
import ThreeStepRCSentenceStatusBuilder from '../../../../../../../status/editor/_3_step_rc/_3StepRCSentenceStatusBuilder';
import RCEditorPreviewWrapper from '../../../../../common/todo/preview/RCEditorPreviewWrapper';
import EditorStep from '../../../../utils/EditorStep';
import RCBodyEditor from '../body/RCBodyEditor';
import RCGapsEditor from '../gaps/RCGapsEditor';
import styles from './RCSentenceEditor.module.css'

interface Props {
    eeControls: EditorExerciseControls;
    rcSentenceDTO: RCSentenceDTO;
}



function RCSentenceEditor({ eeControls, rcSentenceDTO }: Props) {
    let marginTop = 3;


    let onRCBodyEdit = function (body: string) {
        let choices = RCSentenceDTOs.extractChoices(rcSentenceDTO);

        let sentenceDTO: RCSentenceDTO =
            new ThreeStepRCSentenceStatusBuilder()
                .parseBody(body,
                    (nOfAnswers) => {

                        if (nOfAnswers < choices.length) {
                            console.log(`nOfAnswers${nOfAnswers} < choices.length ${choices.length}`)
                            return choices.slice(0, nOfAnswers)
                        }

                        for (let i = choices.length; i < nOfAnswers; i++) {
                            choices[i] = ["", ""];
                        }
                        return choices;
                    })
                .build();

        eeControls.onRCSentenceEdit(rcSentenceDTO.number, sentenceDTO)
        console.log("Body edited.")

    }



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
                <RCBodyEditor rcBodyEditable={onRCBodyEdit} rcSentenceDTO={rcSentenceDTO}></RCBodyEditor>
            </EditorStep>

            <EditorStep number={2} title="Formulate the questions:" marginTop={marginTop}>
                <RCGapsEditor eeControls={eeControls} rcSentenceDTO={rcSentenceDTO}></RCGapsEditor>
            </EditorStep>
            <EditorStep number={3} title="Solve it:" marginTop={marginTop}>
                <RCEditorPreviewWrapper rcSentenceDTO={rcSentenceDTO}></RCEditorPreviewWrapper>
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