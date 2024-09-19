// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
// import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useState,useEffect } from 'react';
import PrivateRouter from './route/PrivateRouter';

function App() {
  const [authenticate,setAuthenticate] = useState(false)
  useEffect (()=>{
    console.log(authenticate)
  },[authenticate]
  )
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<ProductAll/>}/>
        <Route path='/login' element={<Login  setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<PrivateRouter authenticate={authenticate}/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
