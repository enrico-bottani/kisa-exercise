import styles from './RCChoiceEditor.module.css'

interface Props {
    text: string;
}
function RCChoiceEditor({ text }: Props) {
    return (<div className="input-group">
        <input type="input" defaultValue={text} className={"form-control rounded-0 " + styles.RCChoiceEditor}></input>
        <button className="btn btn-outline-secondary rounded-0" type="button" id="button-addon2"><i className="bi bi-trash3"></i></button>
    </div>)
}
export default RCChoiceEditor;