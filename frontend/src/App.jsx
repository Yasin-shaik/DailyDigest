import { useState } from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import News from './Pages/News';
import Admin from './Pages/Admin';
import AdminNewsPage from './Pages/AdminNewsPage';
import NewsPage from './Pages/NewsPage';
function App() {
  const[category,setCategory]=useState('');
  const[adminNews,setAdminNews]=useState([]);
  const[current,setCurrent]=useState();
  return (
    <>
      <BrowserRouter>
      <Navbar setCategory={setCategory}/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          <Route exact path='/news' element={<News setCurrent={setCurrent} category={category}/>}></Route>
          <Route exact path='/newsPage' element={<NewsPage article={current}/>}></Route>
          <Route exact path='/admin' element={<Admin setAdminNews={setAdminNews}/>}></Route>
          <Route exact path='/admin/newsPage' element={<AdminNewsPage news={adminNews}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
