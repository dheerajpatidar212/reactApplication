import { createContext } from 'istanbul-lib-report';
import React from 'react';
import level1 from './level1'

export default function main(){
    const FirstName = createContext();
    const LastName = createContext();

    return(
        <>
        {/* initializing created context and return them... */}
        {/* Provider Property enable us to initialize (or set value) of respective created Context*/}
        <FirstName.Provider value={'Dheeraj'}>
            <LastName.Provider value={'Patidar'}>
                <level1 />
            </LastName.Provider>
        </FirstName.Provider>
        </>
    )
}