import Reac, {useState} from 'react'

const  FunctionState=()=> {
    const [counter, setCounter]=useState(0)
    // const addOne=()=>{
    //     setCounter(prevCounter=>prevCounter+1)

    // }
    // console.log(counter)
  return (
    <div><p>Function state : {counter}</p>
    <button onClick={()=>setCounter(prevCounter=>prevCounter+1)} >State dans Function</button></div>
  )
}
export default FunctionState