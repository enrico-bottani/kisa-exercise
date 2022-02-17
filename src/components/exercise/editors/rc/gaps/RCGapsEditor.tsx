import RCChoicesEditor from "../choices/RCChoicesEditor";


function RCGapsEditor() {
    return (
        <div className="container px-0">
            <div className="row gx-1 mb-2">
                <div className="col-auto"><div className="btn btn-sm rounded-0 btn-secondary">a</div></div>
                <div className="col">
                    <RCChoicesEditor></RCChoicesEditor>
                </div>
            </div>
        </div>);
}

export default RCGapsEditor;