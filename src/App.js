import './App.css';
import BracketColumns from './components/BracketColumns';
import { data } from './data.js';

function App() {
  const { AFC, NFC } = data;
  return (
    <div className="App">
      <BracketColumns AFC={AFC} NFC={NFC} />
    </div>
  );
}

export default App;
