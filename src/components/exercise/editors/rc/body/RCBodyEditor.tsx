import { useEffect, useState } from "react";
import { RCSentenceDTO, StringConstantDTO } from "../../../../../dtos/DTOs";
import { RCBodyEditable } from "../../../../../models/editor/EditorExerciseControls";
import ExerciseType from "../../../../../models/ExerciseType";
import _3StepRCSentenceStatusBuilder from "../../../../../status/editor/_3_step_rc/_3StepRCSentenceStatusBuilder";

interface Props {
    rcSentenceDTO: RCSentenceDTO;
    rcBodyEditable: RCBodyEditable;
}



function RCBodyEditor({ rcBodyEditable, rcSentenceDTO }: Props) {

    var [strSentence, setStrSentence] = useState(_3StepRCSentenceStatusBuilder.parseToStr(rcSentenceDTO));
    var [cursor, setCursor] = useState(0);

    useEffect(() => {
        setStrSentence(_3StepRCSentenceStatusBuilder.parseToStr(rcSentenceDTO));
    }, [rcSentenceDTO])

    function onEdit(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.selectionStart != null)
            setCursor(e.target.selectionStart);
        rcBodyEditable.onRCBodyEdit(rcSentenceDTO.number, e.target.value);
    }
    return (
        <input type="text"
            onChange={onEdit}
            className={"form-control col rounded-0"}
            id="exampleFormControlTextarea1"
            defaultValue={strSentence}></input>)
}
export default RCBodyEditor;
