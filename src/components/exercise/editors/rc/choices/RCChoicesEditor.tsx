import { RCAnswerableDTO } from "../../../../../dtos/DTOs";
import RCChoiceEditor from "./RCChoiceEditor";
interface Props {
    id: number;
    rcAnswerableDto: RCAnswerableDTO;
}
function RCChoicesEditor({ rcAnswerableDto, id }: Props) {

    function onTextChange(text: string) {

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