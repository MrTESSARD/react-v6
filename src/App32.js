
// import Profile from './components/Profile';
import React, {useState, useEffect, useCallback, useMemo} from "react"
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

function App(){
  const [count, setCount] = useState(1);
  const [profile, setProfile] = useState({});
  const [dark, setDark] = useState(false);
  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then(responce=>{
      setProfile(responce.data)
    })
      .catch(err=>{
        console.log(err)



    })
    

  }, [count]);

const goDark=()=>{
  setDark(!dark)
  if (!dark) {
    document.body.classList.add('bg-secondary')
  } else {
    document.body.classList.remove('bg-secondary')
  }

}
const classBtnTheme=dark? "btn-light": "btn-dark"
const textBtnTheme=dark? "Rendre clair": "Rendre sombre"
const memorizedValue = useMemo(()=>{

  console.log(  "je suis dans isOverTen"  )   
   return count>10

}, [count])
  


//   const [countOne, setCountOne] = useState({value:0, btnColor: "success", increment: 25});
//   const [countTwo, setCountTwo] = useState({value:0, btnColor: "danger", increment: 20});

//   const incrementCountOne=useCallback((val)=>{
//   console.log("Je suis dans incrementCountOne")
//   countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
// }, [countOne])

// const incrementCountTwo=useCallback((val)=>{
//   console.log("Je suis dans incrementCountTwo")
//   countTwo.value < 100 && setCountTwo({...countTwo, value:countTwo.value + val})
// }, [countTwo])


  return (
    <div className='container' >
      <h1 className='text-center'>useMemo()</h1>
      {memorizedValue&& <div className="alert alert-danger"role="alert" >STOP</div>}
      <button className='btn-info mb-3' onClick={()=> setCount(count+1)}>increment</button>
      <button className={`btn ${classBtnTheme} mb-3 float-right`} onClick={goDark}>{textBtnTheme}</button>
      <Profile count={count} profile={profile}/>
      
<hr/>


    </div>
 
    
  );
  }




export default App;
