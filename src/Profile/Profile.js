import React from 'react'
const Profile=props=>{
const alertMyname = fullName =>alert( fullName);

    return(
       
<div>
<button className='Bouton' onClick={()=>alertMyname ('my name is fida')}> 
Click here
</button>
</div> 
    );
};

export default Profile;