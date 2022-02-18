import { AssignableDTO, RCAnswerableDTO } from "../../../../../dtos/DTOs";
import EditorExerciseControls from "../../../../../models/editor/EditorExerciseControls";
import RCChoiceEditor from "./RCChoiceEditor";
interface Props {
    id: number;
    rcAnswerableDto: RCAnswerableDTO;
    eeControls: EditorExerciseControls;
}
function RCChoicesEditor({ rcAnswerableDto, eeControls, id }: Props) {

    function onTextChange(text: string) {
        eeControls.onRCAnswerableEdit(id, rcAnswerableDto);
    }

    var choices = rcAnswerableDto.choices.map(choice => {
        return (<div className="col-12">
            <RCChoiceEditor text={choice} onTextChange={onTextChange}></RCChoiceEditor>
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