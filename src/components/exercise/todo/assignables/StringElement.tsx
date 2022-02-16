import { StringConstantDTO } from "../../../../dtos/DTOs";
interface Props {
    stringConstant: StringConstantDTO;
    editMode: number;
}
function StringElement(props: Props) {
    let field;
    if (props.editMode === 1) {
        field = <div className={'row'}>
            <div className="col d-flex align-items-center">
                <p className="w-100 mt-1 mb-1">{props.stringConstant.value}</p>
            </div>
        </div>
    }
    else field = <p>{props.stringConstant.value}</p>
    return field;
}
export default StringElement;