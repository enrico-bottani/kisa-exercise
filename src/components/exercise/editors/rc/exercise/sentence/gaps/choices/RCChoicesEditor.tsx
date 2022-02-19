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
    function onDelete(gapKey: number, choice: number) {
        let clone: RCAnswerableDTO = JSON.parse(JSON.stringify(rcAnswerableDto));
        console.log("Removing from " + clone.choices + " at index " + choice)
        clone.choices.splice(choice, 1);
        console.log("Removing from " + clone.choices + " at index " + choice)

        onAnswerableEdited(gapKey, clone);
    }
    function onCreate() {
        let clone: RCAnswerableDTO = JSON.parse(JSON.stringify(rcAnswerableDto));
        clone.choices.push("")
        onAnswerableEdited(gapKey, clone);
    }
    var choices = rcAnswerableDto.choices.map((choice, choiceID) => {
        return (<div className="col-12 " key={choiceID}>
            <RCChoiceEditor gapKey={gapKey} onDelete={onDelete} onDirtyAnswerable={onDirtyAnswerable} text={choice} choiceID={choiceID}></RCChoiceEditor>
        </div>)
    })

    return (<div className="container gx-0">
        <div className="row gy-1">
            {choices}
            <div className="col-12">
                <button className="btn btn-outline-secondary rounded-0" onClick={onCreate}>+</button>
            </div>
        </div>
    </div>)
}
export default RCChoicesEditor;