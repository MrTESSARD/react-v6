import React, {useState} from 'react'
import AddTodoForm from"./AddTodoForm"

import { v4 as uuidv4 } from 'uuid';

const Todo=()=> {
    const [todos, setTodos]=useState([
    
        {id:1, todo:"Acheter du lait"},
        {id:2, todo:"Acheter du pain"},
        {id:3, todo:"Acheter du fromage"},
    
    ])
    const [warning, setWarning]= useState(false)


    // console.log(todos)

    const myTodos = todos.map(todo=>{
        return(
            <li className='list-group-item'  key={todo.id}>{todo.todo} </li>
        )
    })
    const addNewTodo=(newTodo)=>{
        if (newTodo!=="") {
            setWarning(false)
            setTodos([...todos,{
                id:uuidv4(),
                todo:newTodo
            }])

            
        }else{
            setWarning(true)

        }

    }

    const warningMsg=warning && <div className="alert alert-danger" role="alert">Indiquez un todo</div>
    return (
    <div>
        {warningMsg}
        <h1 className='text-center' >{todos.length} todo</h1>
<ul className='list-group' >
    {myTodos}
</ul>
<AddTodoForm addNewTodo={addNewTodo}/>

    </div>
  )
}
export default Todo