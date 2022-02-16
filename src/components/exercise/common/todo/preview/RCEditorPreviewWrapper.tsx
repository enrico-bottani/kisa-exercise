
import { RCSentenceDTO, StringConstantDTO, RCAnswerableDTO } from "../../../../../dtos/DTOs";
import ExerciseType from "../../../../../models/ExerciseType";
import RCChoices from "../assignables/RCOptions/RCChoices";
import StringElement from "../assignables/StringElement";

import styles from "./RCEditorPreviewWrapper.module.css";

interface Props {
    rcSentenceDTO: RCSentenceDTO;
    onSingleChoiceAnswerableChange: (singleChoiceSentence: RCSentenceDTO, save: boolean) => boolean;
}

function RCEditorPreviewWrapper(props: Props) {
    var singleChoiceSentence = props.rcSentenceDTO;
    let children = (
        singleChoiceSentence.assignables.map((a, id) => {
            switch (a.type) {
                case ExerciseType.String:
                    return (
                        <StringElement
                            key={id}
                            stringConstant={(a as StringConstantDTO)}
                            editMode={1}></StringElement>
                    );
                case ExerciseType.RCAnswerable:
                    return (
                        <RCChoices
                            key={id}
                            singleChoiceAnswerable={(a as RCAnswerableDTO)}
                            editMode={1}></RCChoices>
                    );
                default: return <></>
            }
        })
    )
    return (<div className={"container " + styles.RCEditorPreviewWrapper}>
        {children}
    </div>)
}
export default RCEditorPreviewWrapper;