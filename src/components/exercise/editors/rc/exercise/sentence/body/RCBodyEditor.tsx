import { useEffect, useState } from "react";
import { RCSentenceDTO } from "../../../../../../../dtos/todo/rc_sentence/RCSentenceDTO";
import ThreeStepRCSentenceStatusBuilder from "../../../../../../../status/editor/_3_step_rc/_3StepRCSentenceStatusBuilder";

interface Props {
    rcSentenceDTO: RCSentenceDTO;
    rcBodyEditable: (body: string) => void;
}



function RCBodyEditor({ rcBodyEditable, rcSentenceDTO }: Props) {
    useState()

    function onEdit(e: React.ChangeEvent<HTMLInputElement>) {
        rcBodyEditable(e.target.value);
    }

    useEffect(() => {
        let string = ThreeStepRCSentenceStatusBuilder.parseToStr(rcSentenceDTO);
    })

    return (
        <input key={"str_" + rcSentenceDTO.position} type="text"
            onChange={onEdit}
            className={"form-control col rounded-0"}
            id="exampleFormControlTextarea1"

            defaultValue={ThreeStepRCSentenceStatusBuilder.parseToStr(rcSentenceDTO)}></input>)
}
export default RCBodyEditor;
