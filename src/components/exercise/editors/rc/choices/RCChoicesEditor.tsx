import { AssignableDTO, RCAnswerableDTO } from "../../../../../dtos/DTOs";
import EditorExerciseControls from "../../../../../models/editor/EditorExerciseControls";
import RCChoiceEditor from "./RCChoiceEditor";
interface Props {
    gap: RCAnswerableDTO;
    eeControls: EditorExerciseControls;
}
function RCChoicesEditor({ gap, eeControls }: Props) {

    var choices = gap.choices.map(choice => {
        return (<div className="col-12">
            <RCChoiceEditor text={choice}></RCChoiceEditor>
        </div>)
    })

    return (<div className="container gx-0">
        <div className="row gy-1">
            {choices}
            <div className="col-12">
                <button className="btn btn-outline-secondary rounded-0">+</button>
            </div>
        </div>
    </div>)
}
export default RCChoicesEditor;