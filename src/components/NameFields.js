import React from 'react'
import { useId } from "react";

export default function NameFields() {
    const id = useId()//string
  return (
    <>

      <label htmlFor= {id+"-firstName"}>Prénom</label>
      <div> <input id={`${id}-firstName`} type="text" /></div>
      <label htmlFor={`${id}-lastName`}>Nom</label>
      <div> <input id={`${id}-lastName`} type="text" /></div>
      <label htmlFor={`${id}-age`}>Age</label>
      <div> <input id={`${id}-age`} type="number" /></div>

    </>
  )
}
