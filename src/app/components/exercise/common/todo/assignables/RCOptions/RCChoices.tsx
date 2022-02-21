import { useState } from "react";
import { AnswerSheetItemDTO, RCAnswerableDTO } from "../../../../../../dtos/DTOs";
import RCButton from "./rc_option_button/RCButton";
interface Props {
    rcAnswerableDTO: RCAnswerableDTO;
    editMode: number;
    gapKey: number;
    answSheetItem: AnswerSheetItemDTO | null;
}
function RCChoices(props: Props) {
    let [givenAnswer, setGivenAnswer] = useState(-1)


    let child = (props.rcAnswerableDTO.choices.map((choice, i) => {
        let id = "rc_" + i;
        let isCorrectAnswer = false;
        let isGivenAnswer = false;
        if (props.answSheetItem?.correctAnswerID === i)
            isCorrectAnswer = true;
        if (givenAnswer === i)
            isGivenAnswer = true;
        const status = props.answSheetItem?.status === undefined ? -1 : props.answSheetItem.status;
        return (
            <div key={id} className="col-auto">
                <RCButton
                    answerI={i}
                    gapKey={props.gapKey}
                    choice={choice}
                    editMode={1}
                    isCorrectAnswer={isCorrectAnswer}
                    onGivenAnswerChange={setGivenAnswer}
                    isGivenAnswer={isGivenAnswer}
                    status={status}></RCButton>
            </div>)
    }))
    return (
        <div className="col-auto d-flex">
            <div className="container p-0">
                <div className="row gx-1">
                    {child}
                </div>
            </div>

        </div>
    )
}
export default RCChoices;