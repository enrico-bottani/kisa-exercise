
import styles from './TodoNumber.module.css';
interface Props <T>{
    onClick:any;
    label:string;
    btnClass:string;
    param:T;
    sign:any;
    id:string;
}

function GenericTodoButton<T>(props: Props<T>) {
    return (
        <div className={"col-auto " + styles.TodoNumberButton} key={props.id}>
            <div className={styles.Ratio_1_1}>
                <button type="button" className={props.btnClass} onClick={() => props.onClick(props.param)}>{props.label}
                    <div className={styles.FeedbackContainer}>{props.sign}</div>
                </button>
            </div>
        </div>)

}
export default GenericTodoButton;