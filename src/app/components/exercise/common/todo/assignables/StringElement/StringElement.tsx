import { StringConstantDTO } from "../../../../../../dtos/DTOs";
import styles from "./StringElement.module.css";

interface Props {
    stringConstant: StringConstantDTO;
    editMode: number;
}
function StringElement(props: Props) {
    let field;
    if (props.editMode === 1) {
        field =
            <div className="col-auto">
                <p className={styles.ParagraphStyle}>{props.stringConstant.value}</p>
            </div>
    }
    else field = <p>{props.stringConstant.value}</p>
    return field;
}
export default StringElement;