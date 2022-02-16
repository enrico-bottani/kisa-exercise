import { RCAnswerableDTO } from "../../../../../../dtos/DTOs";
import RCOptionButton from "./RCOptionButton";
import styles from '../Assignables.module.css'
import ExerciseType from "../../../../../../models/ExerciseType";
interface Props {
    singleChoiceAnswerable: RCAnswerableDTO;
    editMode: number;
}
function RCOptions(props: Props) {
    let child = (props.singleChoiceAnswerable.choices.map((choice, i) => {
        let id = ExerciseType.RCAnswerable + props.singleChoiceAnswerable + "_" + i;
        return (
            <div className='col-auto'>
                <RCOptionButton id={id} choice={choice} editMode={1}></RCOptionButton>
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
export default RCOptions;