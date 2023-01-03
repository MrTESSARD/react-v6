import {useState} from 'react'

 const Search= ({searchStr, searchHandler})=> {
  return (
    <>
        
        <input 
        type="text"
        placeholder='Chercher..' 
        value={searchStr}
        onChange={searchHandler}
        
        /> 
        <hr/>           
            </>
  )
}
export  default Search