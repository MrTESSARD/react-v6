import React from 'react'
function Profile({count, profile}) {
    console.log("profile")
return(
<div>
<ul className="list-group">
<li classame="list-group-item"><p className="h2">UserID:</p></li>
<li className="list-group-item"><strong>Nom: </strong>{profile.name}</li>
<li className="list-group-item"><strong>Pseudo: </strong>{profile.username}</li>
<li className="list-grouppitem"><strong>Emall: </strong>{profile.email}</li>
</ul>
</div>
)
}
export default React.memo(Profile)