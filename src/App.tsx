import React from 'react';
import './App.css';
import RCExerciseEditor from './components/exercise/editors/rc/exercise/RCExerciseEditor';
import Header from './components/header/Header';
import ContainerRow from './components/utils/ConRow';

function App() {
  return (


    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet" />
      <header className="App-header">
        <ContainerRow>
          <div className="col">
            <Header />
          </div>
        </ContainerRow>
      </header>
      <RCExerciseEditor></RCExerciseEditor>
    </div>
  );
}

export default App;
