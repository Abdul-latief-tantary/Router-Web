import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Dshboard from './components/Dshboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Science from './Science';
import Math from './Math';
import English from './English';
import History from './History';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Header/>

        <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/Dshboard' element={<Dshboard />}/>
        <Route path='Science' element={<Science />}/>
        <Route path='Math' element={<Math />}/>
        <Route path='English' element={<English/>}/>
        <Route path='History' element={<History />}/>
        
        <Route path='/Login' element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        </Routes>
    
 </div>
  );
}

export default App;
