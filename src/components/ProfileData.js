import React  from 'react'
import ContentData from"./ContentData"

const ProfileData=(props)=>{
    


    return (
      <div>
        
        <p>
            <a className="btn btn-primary" data-toggle="collapse" href="#collapseExemple">
            Information sur {props.welcome.name}
            </a>
            
            
            <ContentData />
            </p>
        
        </div>
    )
}
  export default ProfileData