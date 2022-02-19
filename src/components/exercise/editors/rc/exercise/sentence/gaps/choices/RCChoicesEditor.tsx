import { useState } from "react";
import { RCAnswerableDTO } from "../../../../../../../../dtos/DTOs";
import RCChoiceEditor from "./RCChoiceEditor";
interface Props {
    gapKey: number;
    rcAnswerableDto: RCAnswerableDTO;
    onAnswerableEdited: (gapKey: number, rcAnswerableDTO: RCAnswerableDTO) => void;
}
function RCChoicesEditor({ rcAnswerableDto, gapKey, onAnswerableEdited }: Props) {
    let [valid, setValid] = useState(true);


    function onDirtyAnswerable(gapKey: number, choice: number, value: string) {
        let parse: RCAnswerableDTO = JSON.parse(JSON.stringify(rcAnswerableDto));
        parse.choices[choice] = value;
        onAnswerableEdited(gapKey, parse);
    }

    var choices = rcAnswerableDto.choices.map((choice, choiceID) => {
        return (<div className="col-12 " key={choiceID}>
            <RCChoiceEditor gapKey={gapKey} onDirtyAnswerable={onDirtyAnswerable} text={choice} choiceID={choiceID}></RCChoiceEditor>
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