import { RCAnswerableDTO, RCSentenceDTO, StringConstantDTO } from "../../../../../../dtos/DTOs";
import ExerciseType from "../../../../../../models/ExerciseType";
import RCOptions from "../../../assignable/RCOptions/RCOptions";
import StringElement from "../../../assignable/StringElement";

import styles from "./RCEditorPreviewWrapper.module.css";

interface Props {
    rcSentenceDTO: RCSentenceDTO;
    onSingleChoiceAnswerableChange: (singleChoiceSentence: RCSentenceDTO, save: boolean) => boolean;
}

function RCEditorPreviewWrapper(props: Props) {
    var singleChoiceSentence = props.rcSentenceDTO;
    let children = (
        singleChoiceSentence.assignables.map(a => {
            switch (a.type) {
                case ExerciseType.String:
                    return (
                        <StringElement
                            stringConstant={(a as StringConstantDTO)}
                            editMode={1}></StringElement>
                    );
                case ExerciseType.RCAnswerable:
                    return (
                        <RCOptions
                            singleChoiceAnswerable={(a as RCAnswerableDTO)}
                            editMode={1}></RCOptions>
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