import React, { Component } from 'react';
import axios from"axios"
import profileImg from"../profile.png"

class Profile extends Component {
    state={
        data:{}
    }
    componentDidMount() { 
        // console.log(this.props)//trouver ID
        const data=this.props.match.params.profileId
        let payload = {
            token: "1TVNm2NhAddyof_Tcp2KNw",
            data: {
              name: "nameFirst",
              email: "internetEmail",
              phone: "phoneHome",
              _repeat: 10//10max pour compte gratuit
            }
        };
        
        axios({
          method: "post",
          url: "https://app.fakejson.com/q",
          data: payload
        }).then(resp=> {
          // Do something with fake data
        //   this.setState({
        //     id:data
        // })

        this.setState({
            data:resp.data[data]
        })
        });

         

     }
    render() {
        const{email, name, phone}=this.state.data
        return (
            <div className="container mt-3">
                <h1>Profile</h1>
                <img src={profileImg} alt="profile"/>
                <ul className='list-grop list-group-flush'>
                    <li className='list-group-item'><strong>Nom : </strong>{name}</li>
                    <li className='list-group-item'><strong>Email : </strong>{email}</li>
                    <li className='list-group-item'><strong>Tél : </strong>{phone}</li>
                    
                </ul>
                
            </div>
        );
    }
}

export default Profile;
