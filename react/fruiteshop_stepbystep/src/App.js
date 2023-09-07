import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';

function App() {

  // 추가기능(input입력된 값)에서 사용할 저장공간
  const [newFruit, setNewFruit]  = useState(
    {
      name : "",
      price : "",
      amount : ""
    }
  );

  // 목록조회를 위한 저장공간
  const [fruitList, setFruitList] = useState(
    [
      {
        name : "수박",
        price : "10000",
        amount : "20"
      },
      {
        name : "참외",
        price : "3000",
        amount : "100"
      }
      // 이 부분에 추가 될 예정
    ]
  );


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
              {  // return () 에서 js 문법 사용을 위해 중괄호 사용
                fruitList.map(
                  (fruit) => {
                    // return () 에서 render하고 싶은 내용을 작성
                    return (
                      <tr>
                        <td>{fruit.name}</td>
                        <td>{fruit.price}</td>
                        <td>{fruit.amount}</td>
                      </tr>
                    )
                  }
                )
              }
            </tbody>
          </table>
        </div>
      </>
    );
  }

  const onClickHandler = (event)=>{
    console.log("꼭 확인 !!! 클릭");
    console.log(event.target); // js에서 event 발생하면 매개인자로 event 전달됨. 그것을 확인함.!!!

  }
  const onChangeHandler = (event)=>{
    console.log("꼭 확인 !!! 변경");
    console.log(event.target);  // js에서 event 발생하면 매개인자로 event 전달됨. 그것을 확인함.!!!
    console.log(event.target.name);
    console.log(event.target.value);
    const {name, value} = event.target;
    console.log(name);
    console.log(value);
    
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
          <div><span>이름</span><input onChange={onChangeHandler} name="name"></input></div>
          <div><span>가격</span><input onChange={onChangeHandler} name="price"></input></div>
          <div><span>수량</span><input onChange={onChangeHandler} name="amount"></input></div>
          <div><button onClick={onClickHandler} >등록</button></div>
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
