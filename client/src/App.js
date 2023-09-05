import logo from './logo.svg';
import './App.css';
import ImportComponent from './R003_ImportComponent';
import LifecycleEx from './R004_LifecycleEx';
import $ from 'jquery';

function App() {
  // 18, 20, 21, 23
  return (
    <div className="App">
      <ImportComponent></ImportComponent>
      <h1 >Hello React</h1>
      <LifecycleEx></LifecycleEx>
    </div>
  );
}

export default App;
