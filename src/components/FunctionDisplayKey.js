import React, {useState, useEffect} from 'react'

export default function FunctionDisplayKey() {

    const [keyCode, setKeyCode]= useState("")
    const handleKeyCode =e =>{
        setKeyCode(e.code)

    }

    useEffect(() => {
        document.addEventListener("keyup", handleKeyCode)
        return()=>{//méthode de demontage egale à componentWillUnmount() 
            console.log("handleKeyCode retiré ")
            document.removeEventListener("keyup", handleKeyCode)

        }

    }, []);
  return (
    <div className='card' >
        <div className='card-body'>
        <h1 className='text-center'>ClassDisplayKey {keyCode} </h1>

            </div> 
            
            </div>
  )
}
