import styles from './RCButton.module.css'
interface Props {
    id: string;
    choice: string;
    editMode: number;
}
function RCButton(props: Props) {
    return (<div>
        <input type="radio" className="btn-check" name="btnradio" id={props.id + ""} autoComplete="off" />
        <label className={"btn btn-outline-warning " + styles.Choice} htmlFor={props.id + ""}>{props.choice}</label>
    </div>)
}
export default RCButton;