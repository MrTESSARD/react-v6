import {useDeferredValue}  from 'react'
//sans destructuring
const TableUsers = ({dataArray}) => {
    // console.table(dataArray)//afficher en tableau
if (dataArray.length > 7 ) {
    return new Error()
    
}
    // const deferredValue = useDeferredValue (dataArray)
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
        {/* {notification && <tr><td colSpan={4} style={{color: "red"  }}  >Veuillez patienter</td></tr>} */}
        {
            dataArray.map((user) => {//sans destructuring
                return(
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}{user.address.suite}{user.address.sity}{user.address.zipcode}</td>
                    </tr>
                )
            })
            
    
        }

    </tbody>
    </table>
  )
}

export default  TableUsers