import { RCAnswerable, RCSentence } from "../../../../models/ExerciseSingleChoice";
import styles from './RadioAnswerableElementButton.module.css'
interface Props {
    id:string;
    choice:string;
    editMode: number;
}
function RadioAnswerableElementButton(props: Props) {
    return (<div>
        <input type="radio" className="btn-check" name="btnradio" id={props.id+""} autoComplete="off" />
        <label className={"btn btn-outline-warning " + styles.Choice} htmlFor={props.id+""}>{props.choice}</label>
    </div>)
}
export default RadioAnswerableElementButton;