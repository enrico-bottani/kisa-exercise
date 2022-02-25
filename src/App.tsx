import React from 'react';
import './App.css';
import RCExerciseEditor from './app/components/exercise/editors/rc/RCExerciseEditor';
import Header from './app/components/header/Header';
import ContainerRow from './app/components/utils/ConRow';
import ExerciseSelection from "./app/components/exercise/ExerciseSelection";

function App() {
    return (


        <div className="App">
            <link
                href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                rel="stylesheet"/>
            <header className="App-header">
                <ContainerRow>
                    <div className="col">
                        <ExerciseSelection/>
                    </div>
                </ContainerRow>
            </header>

            <ContainerRow>
                <div className="col">
                    <Header/>
                </div>
            </ContainerRow>
            <RCExerciseEditor/>

        </div>
    );
}

export default App;
