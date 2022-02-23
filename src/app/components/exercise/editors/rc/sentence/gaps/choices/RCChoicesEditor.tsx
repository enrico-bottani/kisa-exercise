import { useState } from "react";
import { AnswerSheetItemDTO, RCAnswerableDTO } from "../../../../../../../dtos/DTOs";
import RCChoiceEditor from "./RCChoiceEditor";
interface Props {
    gapKey: number;
    rcAnswerableDto: RCAnswerableDTO;
    answerId: number;
    onSetSolution: (gapKey: number, givenAnswer: number) => void;
    onAnswerableEdited: (gapKey: number, rcAnswerableDTO: RCAnswerableDTO) => void;
}
function RCChoicesEditor({ rcAnswerableDto, gapKey, onAnswerableEdited, onSetSolution, answerId }: Props) {
    let [valid, setValid] = useState(true);


    function onDirtyAnswerable(gapKey: number, choice: number, value: string) {
        let parse: RCAnswerableDTO = JSON.parse(JSON.stringify(rcAnswerableDto));
        parse.choices[choice] = value;
        onAnswerableEdited(gapKey, parse);
    }
    function onDelete(gapKey: number, choice: number) {
        let clone: RCAnswerableDTO = JSON.parse(JSON.stringify(rcAnswerableDto));
        clone.choices.splice(choice, 1);
        onAnswerableEdited(gapKey, clone);
    }
    function onCreate() {
        let clone: RCAnswerableDTO = JSON.parse(JSON.stringify(rcAnswerableDto));
        clone.choices.push("")
        onAnswerableEdited(gapKey, clone);
    }
    function _onSetSolution(gapKey: number, givenAnswer: number) {
        onSetSolution(gapKey, givenAnswer);
    }

    var choices = rcAnswerableDto.choices.map((choice, choiceID) => {
        return (<div className="col-12 " key={choiceID}>
            <RCChoiceEditor answer={choiceID === answerId} gapKey={gapKey} onDelete={onDelete} onSetSolution={_onSetSolution} onDirtyAnswerable={onDirtyAnswerable} text={choice} choiceID={choiceID}></RCChoiceEditor>
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