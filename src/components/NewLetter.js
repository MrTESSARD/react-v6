import React from 'react'
import { useId } from "react";

export default function NewLetter() {
    const id = useId()
    const container = {
        backgrounf: "PaleGoldenrod",
        padding: "19px",
        width: "60%",
        margin: "9px auto",
        border: "1px orange dashed"
    }
  return (
    <div style={container} >
        
    
      <label htmlFor={id}>NewLetter</label>
      <div>
 
      <input id={id} type="email" name="email" placeholder='Votre Email'/>

      </div>


    
    </div>
  )
}
