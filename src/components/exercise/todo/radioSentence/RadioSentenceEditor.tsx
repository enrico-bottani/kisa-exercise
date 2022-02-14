
import { RCAnswerable, RCSentence, StringConstant } from '../../../../models/ExerciseSingleChoice';
import RadioAnswerableElement from '../assignable/RadioAnswerableElement';
import StringElement from '../assignable/StringElement';
import styles from './RadioSentenceEditor.module.css'
import RCChoicesEditor from './RCChoicesEditor';

interface Props {
    singleChoiceSentence: RCSentence;
    onSingleChoiceAnswerableChange: (singleChoiceSentence: RCSentence, save: boolean) => boolean;
}

function RadioSentenceEditor(props: Props) {
    var singleChoiceSentence = props.singleChoiceSentence;

    let children = (
        singleChoiceSentence.assignables.map(a => {
            switch (a.type) {
                case "String":
                    return (
                        <StringElement stringConstant={(a as StringConstant)} editMode={1} ></StringElement>
                    );
                case "SingleChoiceAnswerable":
                    return (
                        <RadioAnswerableElement singleChoiceAnswerable={(a as RCAnswerable)} editMode={1}></RadioAnswerableElement>
                    );
            }
        })
    )
    let a = props.onSingleChoiceAnswerableChange(singleChoiceSentence, false);
    return (
        <div className={styles.EditorFrame}>

            <h6 className={styles.EditorStep}>
                <span className={styles.EditorStepNumber}>1</span>Write the body:
            </h6>
            <div className={'container'}>
                <div className="row">
                    <input type="text"
                        className={"form-control col " + styles.EditorSubStepFirstInput}
                        id="exampleFormControlTextarea1"
                        value={"We are ... world."}></input>
                </div>
            </div>

            <h6 className={styles.EditorStep}><span className={styles.EditorStepNumber}>2</span>Formulate the questions:</h6>
            <div className={'container '}>
                <div className={'row mb-1'}>
                    <div className="col-auto ps-0">
                        <label htmlFor='staticEmail' className={"col-form-label " + styles.EditorSubStepNumber}>a.</label>
                    </div>
                    <div className={"col " + styles.EditorSubStepLastCol}>
                        <RCChoicesEditor></RCChoicesEditor>
                    </div>
                </div>
            </div>

            <h6 className={styles.EditorStep}><span className={styles.EditorStepNumber}>3</span>Solve it:</h6>
            <div className={"container " + styles.TestSentence}>
                {children}
            </div>
            <h6 className={styles.EditorStep}><span className={styles.EditorStepNumber}>4</span>Save:</h6>
            <div className="container">
                <div className="row">
                    <button className={'btn btn-primary rounded-0 col col-auto me-1 ' + styles.EditorButtonPrimaryBorderLeft} disabled>Save</button>
                    <button disabled className='btn btn-outline-danger rounded-0 me-1 col col-auto'>Discharge changes</button>
                </div>
            </div>
        </div>)
}
export default RadioSentenceEditor;