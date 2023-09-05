import logo from './logo.svg';
import './App.css';
import ComponentClass from './R027_ComponentClass';
import PureComponentClass from './R028_PureComponentClass';
import InputGroup from './R045_ReactstrapInputGroup';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ComponentClass/>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PureComponentClass/>

      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <InputGroup/>
    </div>
  );
}

export default App;
