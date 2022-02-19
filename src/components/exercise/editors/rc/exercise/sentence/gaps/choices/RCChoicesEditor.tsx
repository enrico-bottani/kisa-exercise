import { useState } from "react";
import { RCAnswerableDTO } from "../../../../../../../../dtos/DTOs";
import RCChoiceEditor from "./RCChoiceEditor";
interface Props {
    gapID: number;
    rcAnswerableDto: RCAnswerableDTO;
}
function RCChoicesEditor({ rcAnswerableDto, gapID }: Props) {
    let [valid, setValid] = useState(true);

    var choices = rcAnswerableDto.choices.map((choice, choiceID) => {
        return (<div className="col-12 " key={choiceID}>
            <RCChoiceEditor gapIndex={gapID} choiceID={choiceID} text={choice}></RCChoiceEditor>
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