
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
import Profile from"./components/Profile32"

import './App.css';
import FancyInput from "./components/FancyInput"

const App=()=>{

  const date=new Date()
const fancyInputRef = useRef()
const focusInput=(val)=>{
  fancyInputRef.current.focus(val)
  fancyInputRef.current.countMax()

}
  return (
    <div className='container' >
      <FancyInput name="toto"   ref={fancyInputRef}/>
      <button onClick={()=>focusInput(date.getDay())}>Cliquer</button>

    </div>
 
    
  );
  }




export default App;
