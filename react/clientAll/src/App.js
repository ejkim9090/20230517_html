import './App.css';
import SetState from './R025_SetState';
import React, {useState} from 'react';
import FetchGet from './R059_FetchGet';
import FetchPost from './R060_FetchPost';

function MyFunction(props){
  const [a, aForSetState] = useState('값1');

  //let {title} = props;
  //let {content} = props;
  function clickHandler(){

  }
  return (
    <>
    <div>
      <h2>함수형태 component</h2>
      <div>{props.title} </div>
      <div>{props.content} </div>
    </div>
    <div>
      <h1>useState사용하기 중요!!</h1>
      <div>{a} </div>
      <button onClick={()=>{console.log("클릭이벤트"); aForSetState("변경된값")}}>변경확인</button>
    </div>
    </>
  )
}

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <SetState/>
      <MyFunction title="제목전달합니다." content="내용전달합니다."></MyFunction>
      <FetchGet/>
      <FetchPost/>
    </div>
  );
}




export default App;
