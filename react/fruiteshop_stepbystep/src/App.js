import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  const Home = ()=>{
    return (
      <>
        <h1>홈</h1>
        <nav>
          <ul>
            <li><Link to="/list">과일목록</Link></li>
            <li><Link to="/insert">과일추가</Link></li>
          </ul>
        </nav>
      </>
    );
  }
  const List = ()=>{
    return (
      <>
        <h1>과일목록</h1>
        <nav>
          <ul>
            <li><Link to="/insert">과일추가</Link></li>
            <li><Link to="/">홈</Link></li>
          </ul>
        </nav>
        <div>
          <table>
            <thead>
              <tr>
                <th>이름</th>
                <th>가격</th>
                <th>수량</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>이름1</td>
                <td>가격1</td>
                <td>수량1</td>
              </tr>
              <tr>
                <td>이름2</td>
                <td>가격2</td>
                <td>수량2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
  const Insert = ()=>{
    return (
      <>
        <h1>과일추가</h1>
        <nav>
          <ul>
            <li><Link to="/list">과일목록</Link></li>
            <li><Link to="/">홈</Link></li>
          </ul>
        </nav>
        <div>
          <div><span>이름</span><input></input></div>
          <div><span>가격</span><input></input></div>
          <div><span>수량</span><input></input></div>
          <div><button>등록</button></div>
        </div>
      </>
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
