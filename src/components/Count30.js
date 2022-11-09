import React from 'react'

function Count30({text, count, bgColor}) {
    console.log(`Pourcentage ${text}`)

    const progress={width: `${count}%`}
    // console.log(count)
  return (
    <>
    <p className='h1'>{count} %</p>
    <div className='progress'>
        <div className="progress-bar progress-bar-striped" role="progressbar" style={progress}>

        </div>
    </div>
    
    </>
  )
}
export default React.memo(Count30)
