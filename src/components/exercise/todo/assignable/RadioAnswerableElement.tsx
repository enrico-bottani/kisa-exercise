import { RCAnswerable } from "../../../../models/ExerciseSingleChoice";
import RadioAnswerableElementButton from "./RadioAnswerableElementButton";
import styles from './RadioAnswerableElement.module.css'
interface Props {
    singleChoiceAnswerable: RCAnswerable;
    editMode: number;
}
function RadioAnswerableElement(props: Props) {
    let child = (props.singleChoiceAnswerable.choices.map((choice, i) => {
        let id = "SingleChoiceRatio" + props.singleChoiceAnswerable + "_" + i;
        return (


            <div className='col-auto'>
                <RadioAnswerableElementButton id={id} choice={choice} editMode={1}></RadioAnswerableElementButton>
            </div>)
    }))
    return (<div className={'row '+styles.RowBorder}>
        <div className="col">
            <div className="row gx-1">
                {child}</div></div>
    </div>)
}
export default RadioAnswerableElement;