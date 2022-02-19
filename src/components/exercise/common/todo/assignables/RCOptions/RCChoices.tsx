import { RCAnswerableDTO } from "../../../../../../dtos/DTOs";
import ExerciseType from "../../../../../../models/ExerciseType";
import RCButton from "./rc_option_button/RCButton";
interface Props {
    singleChoiceAnswerable: RCAnswerableDTO;
    editMode: number;
    gapKey: number;
}
function RCChoices(props: Props) {

    let child = (props.singleChoiceAnswerable.choices.map((choice, i) => {
        let id = "rc_" + i;
        return (
            <div key={id} className="col-auto">
                <RCButton id={id} gapKey={props.gapKey} choice={choice} editMode={1}></RCButton>
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