// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Page1 from './Components/Page1'
import ClassBased from './Components/ClassBased';
import Calculator from './Components/Calculator';
// import Comp1 from './Cmp/Comp1';
import Home from './Components/Home';
import Error from './Components/Error';
import Login from './Components/Login';
import Register from './Components/Register';
import Form from './Components/Form';
import { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const userData = createContext();

export default function App() {


  
  // const name="hello";
  const name={
    Name:"Arpit",
    Class:"9"
  }

  const [user, userState] = useState("hello");

  return (
   <>
   <Form/>
   <Router>

   

   {/* <Login/> */}
   {/* <Home/> */}
   {/* <Page1 head="Enter Your text"/> */}
   {/* <ClassBased text="INC/DEC"/> */}
   {/* <Calculator name="Calculator"/> */}

   <Routes>

    {/* <Route path="/Home" element={<Home/>}/>
    <Route path="/Nav" element={<Calculator/>}/>
    <Route path="/Convert" element={<Page1/>}/>
    <Route path="/Class" element={<ClassBased/>}/>
     <Route index element={<Login/>}/>
    <Route path="/Login" element={<Login/>}/> 
    <Route path="/Register" element={<Register/>}/>
    <Route path="*" element={<Error/>}/>  */}
  


   </Routes>

   </Router>
   
   
    {/* <h1>{name}</h1> */}
    {/* <userData.Provider value={user}>
    <Comp1/>
    </userData.Provider> */}
   
   
   
   </> 
   
  )
}

export {userData};
