import RCChoiceEditor from "./RCChoiceEditor";

function RCChoicesEditor() {
    return (<div className="container gx-0">
        <div className="row gy-1">
            <div className="col-12">
                <RCChoiceEditor></RCChoiceEditor>
            </div>
            <div className="col-12">
                <button className="btn btn-outline-secondary">+</button>
            </div>
        </div>
    </div>)
}
export default RCChoicesEditor;