import React, {useContext}  from 'react'
import {MyContext, ColorContext}  from './MyContext'

const ContentData=()=>{
  const user = useContext(MyContext)
  const color = useContext(ColorContext)


    return (
<div style={{color:color}} className="collapse" id='collapseExemple'  >
        <div className='card card-body'>

        <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><strong>Nom : </strong>{user.name}</li>
                    <li className='list-group-item'><strong>Age : </strong>{user.age}</li>
                    
                </ul>
        </div>
        
        
        </div>
    )
}
  export default ContentData