import styles from './RCChoiceEditor.module.css'
function RCChoiceEditor() {
    return (<div className="input-group">
        <input type="input" className={"form-control rounded-0 " + styles.RCChoiceEditor}></input>
        <button className="btn btn-outline-secondary rounded-0" type="button" id="button-addon2"><i className="bi bi-trash3"></i></button>
    </div>)
}
export default RCChoiceEditor;