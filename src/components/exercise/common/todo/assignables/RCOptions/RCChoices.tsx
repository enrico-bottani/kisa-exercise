import { RCAnswerableDTO } from "../../../../../../dtos/DTOs";
import ExerciseType from "../../../../../../models/ExerciseType";
import RCButton from "./rc_option_button/RCButton";
interface Props {
    singleChoiceAnswerable: RCAnswerableDTO;
    editMode: number;
}
function RCChoices(props: Props) {
    let child = (props.singleChoiceAnswerable.choices.map((choice, i) => {
        let id = ExerciseType.RCAnswerable + props.singleChoiceAnswerable + "_" + i;
        return (
            <div className='col-auto' key={id}>
                <RCButton id={id} choice={choice} editMode={1}></RCButton>
            </div>)
    }))
    return (<div className={'row'}>
        <div className="col">
            <div className="row gx-1">
                {child}
            </div>
        </div>
    </div>)
}
export default RCChoices;