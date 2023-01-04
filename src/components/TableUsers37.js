// import React from 'react'
// avec destructuring
const TableUsers = ({dataArray}) => {
  return (
    <table id="table"> 
    <thead>
        <tr>
        <th>Nom</th>
        <th>Nom Utilisateur</th>
        <th>Email</th>
        <th>Adresse</th>
        </tr>
        
    </thead>  
    <tbody>
        {
            dataArray.map(({id, name, username, email, address}) => {//avec destructuring
                return(
                    <tr key={id}>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{address.street}{address.suite}{address.sity}{address.zipcode}</td>
                    </tr>
                )
            })
            
    
        }

    </tbody>
    </table>
  )
}

export default  TableUsers