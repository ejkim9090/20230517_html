import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
/*
url mapping 페이지 구성
나타낼 속성들을 모아서 entity 별로 묶기
이름, 가격, 단위 == 과일
*/

function App() {
  const [a1, a2] = useState([10, 20, 30]);  // a1 저장공간생성
  //fruit 이름의 저장공간 생성 선언
  const [newFruit, setNewFruit] = useState( 
    {
      name : '',
      price : '',
      count : ''
    }
  );
  const insertHandler = () => {
    console.log("insertHandler 함수실행");
    console.log(newFruit); 
  }
  const onChangeInput = (event) => {
    console.log(event.target);
    const {name, value} = event.target;
    console.log(name);
    console.log(value);
    setNewFruit({...newFruit, [name]:value});
  }

  const InsertFruit = () => {
    // 과일추가
    // 과일목록보기
    // 홈으로
    return (
      <>
        <h1>과일추가</h1>
        <nav>
          <ul>
            <li><Link to="/list">과일목록보기</Link></li>
            <li><Link to="/">홈</Link></li>
          </ul>
        </nav>
        <div>
          <form>
            <div><span>이름:</span><input type="text"  onChange={onChangeInput}  value={newFruit.name} name="name"   ></input></div>
            <div><span>가격:</span><input type="text"  onChange={onChangeInput}  value={newFruit.price} name="price"></input></div>
            <div><span>단위:</span><input type="text"  onChange={onChangeInput}  value={newFruit.count} name="count"></input></div>
          </form>
          <button onClick={insertHandler} >추가</button>
        </div>
      </>
    );
  }



  const List = (props) => {
    // const n1 = props.n1;
    // const n2 = props.n2;
    // const {n1} = props;
    // const {n2} = props;
    const { n1, n2 } = props;
    console.log(n1);
    console.log(n2);

    // 리스트
    // 과일추가
    // 홈으로
    return (
      <>
        <h1>리스트</h1>
        <nav>
          <ul>
            <li><Link to="/insert">과일추가</Link></li>
            <li><Link to="/">홈</Link></li>
          </ul>
        </nav>
      </>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/list" element={<List n1="v1" n2={1000} ></List>} />
          <Route path="/insert" element={<InsertFruit></InsertFruit>} />
          <Route path="/delete" element="{<DeleteFruit></DeleteFruit>}" />
          <Route path="/info" element="" />
          <Route path="/update" element="" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const Home = () => {
  // 홈
  // 과일목록보기
  // 과일추가
  return (
    <>
      <h1>홈</h1>
      <nav>
        <ul>
          <li><Link to="/list">과일목록보기</Link></li>
          <li><Link to="/insert">과일추가</Link></li>
        </ul>
      </nav>
    </>
  );
}



const f0 = function () { console.log(); }
const f1 = function (data, a) { console.log(); }
const f2 = (data, a) => { console.log(); console.log(); }
const f3 = (data) => { console.log(); }
const f4 = data => console.log();
const f5 = () => console.log();





export default App;
