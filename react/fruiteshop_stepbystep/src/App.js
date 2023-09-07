import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const Home = ()=>{
    return (
      <h1>홈</h1>
    );
  }
  const List = ()=>{
    return (
      <h1>과일목록</h1>
    );
  }
  const Insert = ()=>{
    return (
      <h1>과일추가</h1>
    );
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/list' element={<List></List>} />
          <Route path='/insert' element={<Insert></Insert>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
