
import Profile from './components/Profile';
import React, {useState, useCallback} from "react"
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

import './App.css';

function App(){
  const [countOne, setCountOne] = useState({value:0, btnColor: "success", increment: 25});
  const [countTwo, setCountTwo] = useState({value:0, btnColor: "danger", increment: 20});

  const incrementCountOne=useCallback((val)=>{
  console.log("Je suis dans incrementCountOne")
  countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
}, [countOne])

const incrementCountTwo=useCallback((val)=>{
  console.log("Je suis dans incrementCountTwo")
  countTwo.value < 100 && setCountTwo({...countTwo, value:countTwo.value + val})
}, [countTwo])


  return (
    <div className='container' >
      
{/* <h1 className='text-center'>App</h1> */}
{/* <ClassCount/> */}
{/* <FunctionCount/> */}
{/* <Container/> */}
{/* <Count/> */}
<Count text="CountOne" count={countOne.value} bgColor={countOne.btnColor}/>
<Count text="CountTwo" count={countTwo.value} bgColor={countTwo.btnColor}/>
<Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}>Count 1 </Button>
<Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}>Count 2 </Button>
<hr/>


    </div>
 
    
  );
  }




export default App;
