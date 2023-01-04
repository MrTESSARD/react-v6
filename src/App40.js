
// import Profile from './components/Profile';
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react"
import axios, { Axios } from "axios"
// import MyContext from "./components/MyContext"
// import ClassState from"./components/ClassState"
// import FunctionState from"./components/FunctionState"
// import Todo from"./components/Todo"
// import ClassCount from"./components/ClassCount"
import FunctionCount from "./components/FunctionCount"
import Container from "./components/Container"
// import Count from"./components/Count"
import Button from "./components/Button"
import Count from "./components/Count30"
import Layout from "./components/Layout"
import Box from "./components/Box"

import './App.css';

import FancyInput from "./components/FancyInput"
import ClickSayHello from "./components/ClickSayHello"
import MyContacts from "./components/MyContacts"
import { fakeUsersGenerator } from "./data/users"
import Search from "./components/Search"
import TableUsers from "./components/TableUsers"
const users = fakeUsersGenerator()
console.log(users)

const App = () => {
 
   

  
  const [search, setSearch] = useState(''); //input
  const [resultSearch, setResultSearch] = useState([]);//resultat de la recherche
  // const [isPending, startTransition] = useTransition();//resultat de la recherche
  // const {data, isLoading} = useFetch("https://jsonplaceholder.typicode.com/users");
  // console.log(users)


  // useUpdateDocTitle(search)

  for (let index = 0; index < 100000000; index++) {

  }
  //custom hook
  const filterUsers = () => {
    const foundUsers = users.filter(user => {
      return Object.values(user)
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase())
    })
    setResultSearch(foundUsers);
  }



  useEffect(() => {
    if (search !== '') {
      //Filter
      // startTransition(()=> {
        filterUsers();

      // })
    }
    else {

      setResultSearch([])
    }

  }, [search]);


  const handleChange = e => {
    setSearch(e.target.value)

  }

  const msgDisplay = (msg, color) => {
    return (

      <p style={{ textAlign: 'center', color: color }}>
        {msg}
      </p>
    )

  }
  return (

    <div className="App">
      <h1>Mes contactes</h1>
      <p>Total:  {users.length} membres </p>
      

      <Search
        searchStr={search}
        searchHandler={handleChange}
      />
      {

        search === '' ? null
          :
          <TableUsers
            dataArray={resultSearch}
            
            />}
    </div>
  )





}




export default App;
