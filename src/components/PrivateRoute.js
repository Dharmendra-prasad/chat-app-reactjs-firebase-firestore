import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/**
* @author
* @function PrivaeRoute
**/

const PrivaeRoute = ({component:Component,...rest}) => {
  return(
    <div>
        <Route {...rest} component={(props)=>{
            const user  = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
            if(user){
                return <Component {...props} />
            }else{
                return <Redirect to={`/login`}/>
            }
        }}
        />
    </div>
   )

 }

export default PrivaeRoute