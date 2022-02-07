
import GenericTodoButton from './GenericTodoButton';
import styles from './TodoNumber.module.css';
interface Props {
    representingTodoNumber: number;
    currentTodoNumber: number;
    errorsNumber: number;
    onSetSelected: any;
    key: any;
}

function TodoNumber(props: Props) {
    let btnClass = "btn rounded-0 ";
    let sign = <div></div>;

    if (props.errorsNumber > 0) {
        btnClass += "btn-outline-danger ";
        sign = <i className="bi bi-x"></i>;
    } else if (props.errorsNumber == -1) {
        if ((props.representingTodoNumber === props.currentTodoNumber)) btnClass += "btn-outline-primary " + styles.Selected + " "
        else btnClass += "btn-outline-secondary ";
    } else if (props.errorsNumber == 0) {
        btnClass += "btn-outline-success ";
        sign = <i className="bi bi-check-lg"></i>;
    }
    var label = "" + (props.representingTodoNumber + 1);

    return <GenericTodoButton<number>
        sign={sign}
        onClick={props.onSetSelected}
        label={label}
        id={label}
        btnClass={btnClass}
        param={props.representingTodoNumber}></GenericTodoButton>
}
export default TodoNumber;