import { useState } from "react";
import { RCAnswerableDTO } from "../../../../../../../../dtos/DTOs";
import RCChoiceEditor from "./RCChoiceEditor";
interface Props {
    id: number;
    rcAnswerableDto: RCAnswerableDTO;
}
function RCChoicesEditor({ rcAnswerableDto, id }: Props) {
    let [valid, setValid] = useState(true);
    function onTextChange(i: number, text: string) {
        if (text === "") return setValid(false);
        for (let i = 0; i < rcAnswerableDto.choices.length; i++) {
            let runner = rcAnswerableDto.choices[i];
            if (runner === "" || runner === text) return setValid(false);
        }
        setValid(true);
    }

    var choices = rcAnswerableDto.choices.map((choice, i) => {
        return (<div className="col-12 " key={i}>
            <RCChoiceEditor i={i} text={choice} onTextChange={onTextChange}></RCChoiceEditor>
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