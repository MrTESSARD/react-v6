
// import Profile from './components/Profile';
import React, {useState, useEffect, useCallback, useMemo, useRef} from "react"
import axios, { Axios } from "axios"
// import MyContext from "./components/MyContext"
// import ClassState from"./components/ClassState"
// import FunctionState from"./components/FunctionState"
// import Todo from"./components/Todo"
// import ClassCount from"./components/ClassCount"
import FunctionCount from"./components/FunctionCount"
import Container from"./components/Container"
// import Count from"./components/Count"
import Button from"./components/Button"
import Count from"./components/Count30"
import Layout from"./components/Layout"
import Box from"./components/Box"

import './App.css';
import FancyInput from "./components/FancyInput"
import ClickSayHello from "./components/ClickSayHello"

const App=()=>{


  return (
    <div className='container' >
      {/* <h1>Hello world</h1> */}
      <ClickSayHello/>

    </div>
 
    
  );
  }




export default App;
