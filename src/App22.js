
import Profile from './components/Profile';
import React from "react"
import MyContext from "./components/MyContext"
import ClassState from"./components/ClassState"
import FunctionState from"./components/FunctionState"

import './App.css';

function App(){

  return (
    <div>
<h1 className='text-center'>useState Hooks</h1>
<ClassState/>
<hr/>
<FunctionState/>

    </div>
 
    
  );
}



export default App;
