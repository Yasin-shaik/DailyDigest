import { useState } from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import News from './Pages/News';
function App() {
  const[category,setCategory]=useState('ALL');
  return (
    <>
      <BrowserRouter>
      <Navbar setCategory={setCategory}/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/news' element={<News category={category}/>}></Route>
          <Route exact path='/politics' element={<News category={category}/>}></Route>
          <Route exact path='/cinema' element={<News category={category}/>}></Route>
          <Route exact path='/education' element={<News category={category}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
