//import logo from './logo.svg';
import './App.css';
import Navibar from './components/NaviBar';
import Login from './pages/Login';
import Home from './pages/Home';

import {BrowserRouter, Routes, Route,Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
    <div>
      <Navibar />
      <Routes>
         
          <Route index element={<Login />} />
          <Route path ="/login" element={<Login />} />
          <Route path ="/home" elemetn ={<Home />} />
         
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
