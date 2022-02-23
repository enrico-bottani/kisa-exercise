import { useState } from "react";
import { I_RCSentenceDTO } from "../../../../../../dtos/exercise/todo/rc_sentence/I_RCSentenceDTO";
import ThreeStepRCSentenceStatusBuilder from "../../../../../../status/editor/_3_step_rc/_3StepRCSentenceStatusBuilder";

interface Props {
    rcSentenceDTO: I_RCSentenceDTO;
    rcBodyEditable: (body: string) => void;
}



function RCBodyEditor({ rcBodyEditable, rcSentenceDTO }: Props) {
    useState()

    function onEdit(e: React.ChangeEvent<HTMLInputElement>) {
        rcBodyEditable(e.target.value);
    }

    return (
        <input key={"str_" + rcSentenceDTO.position} type="text"
            onChange={onEdit}
            className={"form-control col rounded-0"}
            id="exampleFormControlTextarea1"

            defaultValue={ThreeStepRCSentenceStatusBuilder.parseToStr(rcSentenceDTO)}></input>)
}
export default RCBodyEditor;
