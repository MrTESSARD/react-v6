
import Profile from './components/Profile';
import React from "react"
import MyContext from "./components/MyContext"
// import ClassState from"./components/ClassState"
// import FunctionState from"./components/FunctionState"
import Todo from"./components/Todo"
import AddTodoForm from"./components/AddTodoForm"

import './App.css';

function App(){

  return (
    <div className='container' >
<h1 className='text-center'>useState Hooks</h1>
<Todo/>
<hr/>


    </div>
 
    
  );
}



export default App;
