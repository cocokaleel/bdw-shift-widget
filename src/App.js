import Workshops from './widgets/workshops';
import Monitors from './widgets/monitors.js';
import LaserQueue from './widgets/laser-queue';
import './App.css';

function App() {
  return (
    <div className="App">
      <Workshops/>
      <Monitors/>
      <LaserQueue/>
    </div>
  );
}

export default App;
