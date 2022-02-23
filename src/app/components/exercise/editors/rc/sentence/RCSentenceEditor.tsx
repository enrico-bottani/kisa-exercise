

import { AnswerSheetItemDTO } from '../../../../../dtos/DTOs';
import { RCSentenceDTOs } from '../../../../../dtos/RCSentenceDTOs';
import { I_RCSentenceDTO } from "../../../../../dtos/exercise/todo/rc_sentence/I_RCSentenceDTO";
import ThreeStepRCSentenceStatusBuilder from '../../../../../status/editor/_3_step_rc/_3StepRCSentenceStatusBuilder';
import RCEditorPreviewWrapper from '../../../common/todo/preview/RCEditorPreviewWrapper';
import EditorStep from '../../utils/EditorStep';
import RCBodyEditor from './body/RCBodyEditor';
import RCGapsEditor from './gaps/_widget/RCGapsEditor';
import styles from './RCSentenceEditor.module.css'
import { RCSentence } from '../../../../../models/exercise/todo/rc_sentence/RCSentence';

interface Props {
    stageRCSentenceEdits: (sentenceId: number, rcSentenceDTO: I_RCSentenceDTO) => void;
    rcSentenceDTO: RCSentence;
}



function RCSentenceEditor(props: Props) {
    let marginTop = 2;

    let onRCBodyEdit = function (body: string) {
        let choices = RCSentenceDTOs.extractChoices(props.rcSentenceDTO);
        let sentenceDTO: I_RCSentenceDTO =
            new ThreeStepRCSentenceStatusBuilder()
                .parseBody(props.rcSentenceDTO.position, body,
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
        props.stageRCSentenceEdits(props.rcSentenceDTO.position, sentenceDTO)
    }



    return (
        <div className={styles.EditorFrame}>
            <div className="container px-0">
                <div className='row gx-0 border-bottom border-2 mb-3 pb-2 d-flex align-items-center'>
                    <div className="col-auto">
                        <button disabled={!(props.rcSentenceDTO.dirty === true)} className={"btn btn-success rounded-0 " + styles.EditorSubStepNumber} >
                            <i className="bi bi-save"></i>
                            <span className='ms-2'>Save</span>
                        </button>
                    </div>
                    <div className="col ms-3"><h2 className='mb-0'>Radio Choice Editor</h2></div>
                    <div className="col-auto">
                        <div className="btn btn-outline-secondary rounded-0 border-0"><i className="bi bi-three-dots"></i></div>
                    </div>
                </div>
            </div>
            <EditorStep number={0} title="Preview:"
                paddingTop={marginTop} paddingBottom={marginTop} positionSticky={true}>
                <RCEditorPreviewWrapper rcSentenceDTO={props.rcSentenceDTO}></RCEditorPreviewWrapper>
            </EditorStep>
            <EditorStep number={1} title="Write the body:" paddingTop={marginTop} paddingBottom={marginTop} >
                <RCBodyEditor rcBodyEditable={onRCBodyEdit} rcSentenceDTO={props.rcSentenceDTO}></RCBodyEditor>
            </EditorStep>

            <EditorStep number={2} title="Formulate the questions:" paddingTop={marginTop} paddingBottom={marginTop} >
                <RCGapsEditor stageRCSentenceEdits={props.stageRCSentenceEdits} rcSentenceDTO={props.rcSentenceDTO}></RCGapsEditor>
            </EditorStep>
        </div >)
}
export default RCSentenceEditor;