import ExerciseProvider from "../../services/exercise_provider/ExerciseProvider";
import {useEffect, useState} from "react";
import Exercise from "../../models/exercise/Exercise";
import set = Reflect.set;

function ExerciseSelection() {
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
            return <li key={e.id}>{e.title}
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