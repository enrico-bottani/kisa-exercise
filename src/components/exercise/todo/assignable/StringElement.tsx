import { RCAnswerable, StringConstant } from "../../../../models/ExerciseSingleChoice";
import styles from './RadioAnswerableElement.module.css'
interface Props {
    stringConstant: StringConstant;
    editMode: number;
}
function StringElement(props: Props) {
    let field;
    if (props.editMode == 1) {
        field = <div className={'row '+styles.RowBorder}>
            <div className="col d-flex align-items-center">
                <p className="w-100 mt-1 mb-1">{props.stringConstant.value}</p>
            </div>

        </div>
    }
    else field = <p>{props.stringConstant.value}</p>
    return field;
}
export default StringElement;