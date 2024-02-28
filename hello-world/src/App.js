import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
  //OR
import { Greet } from './components/Functional_Component';
import Class_compo_example from './components/Class_component';
function App() {
  return (
    <div className="App">
      <Greet/>
      <Class_compo_example/>
    </div>
  );
}

export default App;
