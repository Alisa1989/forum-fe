// import './App.css';
import { LandingContainer } from './components/pages/landing';

/* The following line can be included in your src/index.js or App.js file */
import '../src/styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingContainer />
      </header>
    </div>
  );
}

export default App;