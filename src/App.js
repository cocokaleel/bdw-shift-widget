import logo from './logo.svg';
import Workshops from './widgets/workshops';
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
