
import Profile from './components/Profile';
import React from "react"
// import MyContext from "./components/MyContext"
// import ClassState from"./components/ClassState"
// import FunctionState from"./components/FunctionState"
// import Todo from"./components/Todo"
// import ClassCount from"./components/ClassCount"
import FunctionCount from"./components/FunctionCount"

import './App.css';

function App(){

  return (
    <div className='container' >
<h1 className='text-center'>Hook d’effet – useEffect après Render</h1>
{/* <ClassCount/> */}
<FunctionCount/>
<hr/>


    </div>
 
    
  );
}



export default App;
