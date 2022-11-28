import React, { useState, useEffect, useLayoutEffect} from 'react'

export default function Layout() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("je suis dans useEffect1")
    }, [count]);

    useLayoutEffect(() => {
        console.log("je suis dans useLayoutEffect")
    }, [count]);
    console.log('render')
  return (
    <div>
        <h2>
        {count}
        </h2>
        <button onClick={()=>setCount(count+1)}>+1</button>
        </div>
  )
}
