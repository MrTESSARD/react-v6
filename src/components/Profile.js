import React, { Component, useDebugValue } from 'react';
import profileImg from"../profile.png"
import ProfileData from"./ProfileData"
import {MyContext} from"./MyContext"

class Profile extends Component {
 


     
    render() {
        let value=this.context
    //     console.log(value)
        return (
            <div className="container mt-3">
                <h1>{this.props.info.name}</h1>
                <p>Age : {value.age} ans</p>
                <img src={profileImg} alt="profile" className="img-thumbnail mb-3"/>
                <ProfileData welcome={this.props.info}/>
                
            </div>
        );
    }
}
Profile.contextType=MyContext
// console.log(Profile.contextType)
export default Profile;
