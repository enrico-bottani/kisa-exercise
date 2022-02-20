
import { RCSentenceDTO, AnswerSheetItemDTO } from '../../../../../../../dtos/DTOs';
import { RCSentenceDTOs } from '../../../../../../../dtos/RCSentenceDTOs';
import ThreeStepRCSentenceStatusBuilder from '../../../../../../../status/editor/_3_step_rc/_3StepRCSentenceStatusBuilder';
import RCEditorPreviewWrapper from '../../../../../common/todo/preview/RCEditorPreviewWrapper';
import EditorStep from '../../../../utils/EditorStep';
import RCBodyEditor from '../body/RCBodyEditor';
import RCGapsEditor from '../gaps/_widget/RCGapsEditor';
import styles from './RCSentenceEditor.module.css'

interface Props {
    stageRCSentenceEdits: (sentenceId: number, rcSentenceDTO: RCSentenceDTO) => void;
    rcSentenceDTO: RCSentenceDTO;
}



function RCSentenceEditor({ stageRCSentenceEdits, rcSentenceDTO }: Props) {
    let marginTop = 2;


    let onRCBodyEdit = function (body: string) {
        let choices = RCSentenceDTOs.extractChoices(rcSentenceDTO);
        let sentenceDTO: RCSentenceDTO =
            new ThreeStepRCSentenceStatusBuilder()
                .parseBody(rcSentenceDTO.id, body,
                    (nOfAnswers) => {
                        if (nOfAnswers < choices.length) {
                            return choices.slice(0, nOfAnswers)
                        }

                        for (let i = choices.length; i < nOfAnswers; i++) {
                            choices[i] = ["", ""];
                        }
                        return choices;
                    },
                    (nOfAnswers) => {
                        let answers = [];
                        for (let i = 0; i < nOfAnswers; i++) {
                            answers.push({ givenAnswerID: -1, status: -1 } as AnswerSheetItemDTO);
                        }
                        return answers;
                    })
                .build();
        stageRCSentenceEdits(rcSentenceDTO.id, sentenceDTO)
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
            <EditorStep number={1} title="Write the body:" paddingTop={marginTop} paddingBottom={marginTop} >
                <RCBodyEditor rcBodyEditable={onRCBodyEdit} rcSentenceDTO={rcSentenceDTO}></RCBodyEditor>
            </EditorStep>

            <EditorStep number={2} title="Formulate the questions:" paddingTop={marginTop} paddingBottom={marginTop} >
                <RCGapsEditor stageRCSentenceEdits={stageRCSentenceEdits} rcSentenceDTO={rcSentenceDTO}></RCGapsEditor>
            </EditorStep>
            <EditorStep number={3} title="Preview and save:"
                paddingTop={marginTop} paddingBottom={marginTop} positionSticky={true}>
                <>
                    <RCEditorPreviewWrapper rcSentenceDTO={rcSentenceDTO}></RCEditorPreviewWrapper>
                    <div className='mt-1'>
                        <button className={'btn btn-primary rounded-0 col col-auto me-1 ' + styles.EditorButtonPrimaryBorderLeft} disabled>Save</button>
                        <button disabled className='btn btn-outline-danger rounded-0 me-1 col col-auto'>Discharge changes</button>
                    </div>
                </>
            </EditorStep>
        </div >)
}
export default RCSentenceEditor;