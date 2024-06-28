import logo from './logo.svg';
import './App.css';
import Form from './Form';
import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableData from './TableData';
import ApiData from './Component/ApiData';
import General from './Component/General';
import Business from './Component/Business';
import Entertainment from './Component/Entertainment';
import Health from './Component/Health';
import Science from './Component/Science';
import Sports from './Component/Sports';
import Technology from './Component/Technology';
import Navbar from './Component/Navbar';


export const data = createContext()
function App() {

  return (
    <div className='App'>
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    {/* <Route path="/" element={<ApiData/>}/>  
      {/* <Route path="/" element={<Form/>}/>
      <Route path="/edit/:id" element={<Form/>}/>
      <Route path="/table" element={<TableData/>}/> */} 
      <Route path='/' element={<General category={"general"}/>}/>
      <Route path='/business' element={<Business category={"business"}/>}/>
      <Route path='/entertainment' element={<Entertainment category={"entertainment"}/>}/>
      <Route path='/health' element={<Health category={"health"}/>}/>
      <Route path='/science' element={<Science category={"science"}/>}/>
      <Route path='/sports' element={<Sports category={"sports"}/>}/>
      <Route path='/technology' element={<Technology category={"technology"}/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
    </div>
  );
}

export default App;
