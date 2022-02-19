import styles from './RCButton.module.css'
interface Props {
    id: string;
    choice: string;
    gapKey: number;
    editMode: number;
}
function RCButton(props: Props) {
    let gapKey = props.gapKey + "_" + props.id + "";
    return (<div>
        <input type="radio" className="btn-check" name={props.gapKey + ""} id={gapKey} autoComplete="off" />
        <label className={"btn btn-outline-warning " + styles.Choice} htmlFor={gapKey}>{props.choice}</label>
    </div>)
}
export default RCButton;