import React, {useState, useEffect} from 'react'

export default function FonctionCount() {
  const [count, setCount]=useState(0)
  const [name, setName]=useState("")
  useEffect(()=>{
    // setTimeout(()=>{

      console.log('Mise a jour')
      document.title=`vous avez cliqué ${count} fois`
    // }, 5000)


  },[] )//si array vide s'execute une fois au demarege
  return (
    <div>
        <h1 className='text-center'>{count}</h1>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={ () => setCount(count + 1)}>Cliquez</button>
    </div>
  )
}
