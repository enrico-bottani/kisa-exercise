
import { StringConstantDTO, RCAnswerableDTO } from "../../../../../dtos/DTOs";
import { RCSentenceDTO } from "../../../../../dtos/todo/rc_sentence/RCSentenceDTO";
import ExerciseType from "../../../../../models/ExerciseType";
import RCChoices from "../assignables/RCOptions/RCChoices";
import StringElement from "../assignables/StringElement/StringElement";

import styles from "./RCEditorPreviewWrapper.module.css";

interface Props {
    rcSentenceDTO: RCSentenceDTO;
}

function RCEditorPreviewWrapper(props: Props) {
    var singleChoiceSentence = props.rcSentenceDTO;
    let gapKeyCounter = 0;
    let children = singleChoiceSentence.assignables.map((a, id) => {
        switch (a.type) {
            case ExerciseType.String:
                return (
                    <StringElement
                        key={id}
                        stringConstant={(a as StringConstantDTO)}
                        editMode={1}></StringElement>
                );
            case ExerciseType.RCAnswerable:
                gapKeyCounter++
                return (
                    <RCChoices
                        key={id}
                        gapKey={gapKeyCounter - 1}
                        rcAnswerableDTO={(a as RCAnswerableDTO)}
                        answSheetItem={props.rcSentenceDTO.answerSheet[gapKeyCounter - 1]}
                        editMode={1}></RCChoices>
                );
            default: return <></>
        }
    })

    return (
        <div className="container ps-0">
            <div className="row gx-3">
                {children}
            </div>
        </div>
    )
}
export default RCEditorPreviewWrapper;