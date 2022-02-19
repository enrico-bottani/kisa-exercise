import styles from './RCChoiceEditor.module.css'

interface Props {
    text: string;
    choiceID: number;
    gapIndex: number;
}
function RCChoiceEditor({ text, choiceID, gapIndex }: Props) {

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    }

    return (
        <div><div className="input-group">
            <div className="input-group-text rounded-0">
                <input className="form-check-input mt-0" type="radio" name={"a_" + gapIndex} aria-label="Radio button for following text input"></input>
                <div className={styles.CorrectAnswer}>Answer</div>
            </div>
            <input type="input" defaultValue={text} className={"form-control rounded-0 " + styles.RCChoiceEditor} onChange={onChange}></input>
            <button className="btn btn-outline-secondary rounded-0" type="button" id="button-addon2"><i className="bi bi-trash3"></i></button>

        </div>

        </div>)
}
export default RCChoiceEditor;