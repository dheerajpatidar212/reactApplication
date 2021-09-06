import React from 'react';
import logo from './notFound.png';

export default function NotFound(){
    return(
        <div className="container text-center">
            <img src={logo} alt="Not Found..." width='340px' height="340px" />
            <h2>404 Page Not Found</h2>
            <p>The Page You Have Requested is Not Found. Plz Recheck Requested Pages....</p>
        </div>
    )
}

