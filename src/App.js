import Workshops from './widgets/workshops';
import Monitors from './widgets/monitors.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Workshops className="widget"/>
      <Monitors className="widget"/>
    </div>
  );
}

export default App;
