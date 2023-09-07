import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const Home = ()=>{
    return (
      <h1>Home</h1>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
