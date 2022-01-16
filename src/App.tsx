import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ExerciseComponent'
import Exercise from './components/ExerciseComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Exercise></Exercise>
      </header>

    </div>
  );
}

export default App;
