import { AnswerSheetItemDTO } from '../../../../../../../dtos/DTOs';
import styles from './RCButton.module.css'
interface Props {
    answerI: number;
    choice: string;
    gapKey: number;
    editMode: number;
    isGivenAnswer: boolean;
    status: number;
    isCorrectAnswer: boolean;
    onGivenAnswerChange: (answerId: number) => void;
}
function RCButton(props: Props) {
    let gapKey = props.gapKey + "_" + props.answerI + "";
    function onGivenAnswerChange() {
        props.onGivenAnswerChange(props.answerI);
    }
    let btnOutlineClass = "btn-outline-secondary";
    if (props.isCorrectAnswer /*&& props.isGivenAnswer*/) {
        btnOutlineClass = "btn-success ";
    }
    const checked = (props.editMode === 1) ? props.isCorrectAnswer : props.isGivenAnswer;
    return (<div>
        <input checked={props.isCorrectAnswer} onChange={onGivenAnswerChange} type="radio" className="btn-check" name={props.gapKey + ""} id={gapKey} />
        <label className={"btn " + btnOutlineClass + " " + styles.Choice} htmlFor={gapKey}>{props.choice}</label>
    </div>)
}
export default RCButton;