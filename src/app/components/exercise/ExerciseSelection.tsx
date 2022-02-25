import ExerciseProvider from "../../services/exercise_provider/ExerciseProvider";
import {MouseEventHandler, useEffect, useState} from "react";
import Exercise from "../../models/exercise/Exercise";
import set = Reflect.set;

interface Props {
    exerciseId: number;
    setExerciseId:any;
}


function ExerciseSelection(props:Props) {
    //////////////////////////////////////////////
    ///                  Hooks                 ///
    //////////////////////////////////////////////
    let [exercises, setExercises] = useState(new Array<Exercise>())
    let [networkError, setNetworkError] = useState(false)
    useEffect(() => {
        new ExerciseProvider().getExercises()
            .then(e => {
                setNetworkError(false);
                setExercises(e);
            })
            .catch(e => {
                setNetworkError(true);
                throw new Error("Network error")
            })

    }, [])

    function onExerciseChoose(e: number) {
        props.setExerciseId(e);
    }

    let ui = <p>Loading exercises</p>
    if (networkError) {
        ui = <div className="alert alert-danger rounded-0" role="alert">
            Network error!
        </div>
    } else if (exercises.length === 0) {
        ui = <p>Loading...</p>
    } else {
        console.log(exercises)

        ui = <ul>{exercises.map(e => {
            return <li key={e.id} onClick={ev=>onExerciseChoose(e.id)}>{e.title}
                <div>
                    <code>{JSON.stringify(e)}</code>
                </div>
            </li>
        })}</ul>;
    }

    return (<div>
        {ui}
    </div>)
}

export default ExerciseSelection;