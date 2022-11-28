import React, { useState, useEffect, useLayoutEffect, useRef} from 'react'
import Content from "./Content";
export default function Box() {
    const [height, setHeight] = useState(100);
    
    
    const boxStyle={
        width:'400px',
        height:`${height}px`,
        margin:'0 auto',
        background: height>100 ? 'green' : 'red'
    }
    
    
    const boxRef = useRef(null)
    const timerRef = useRef(0)
    // useEffect(() => {// le changement s'effectue après le render mais je peux pas voir trop rapide
    //     // console.log(boxRef.current.getBoundingClientRect())
    //     // console.log(boxRef.current.offsetHeight)
    //     if (boxRef.current.offsetHeight <150) {
    //         setHeight(height+100)
    //         console.log(`attente: ${performance.now()-timerRef.current }`)

            
    //     }
    // }, [height]);


    useLayoutEffect(() => {
        // console.log(boxRef.current.getBoundingClientRect())
        // console.log(boxRef.current.offsetHeight)
        if (boxRef.current.offsetHeight <150) {
            setHeight(height+100)

            console.log(`attente: ${performance.now()-timerRef.current }`)
            
        }
    }, [height]);


    timerRef.current = performance.now()
  return (
    <div ref={boxRef}  style={boxStyle}>
        {`Height: ${height}`}
        <Content/>
    </div>
  )
}
