// import './App.css';
import { LandingContainer } from './components/pages/landing';
import React, {useReducer} from 'react';
/* The following line can be included in your src/index.js or App.js file */
import '../src/styles/App.scss';
import {initialState, postcardReducer} from './state/reducers/postcardReducer'

function App() {
  const [state, dispatch] = useReducer(postcardReducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
        <LandingContainer />
      </header>
    </div>
  );
}

export default App;