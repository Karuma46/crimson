import React, {useEffect} from 'react'

const Auth = () =>{

    useEffect(() => {
        document.title = "Login | Crimsont Traders"
    },[])

    return(
        <>
            <h1>This is the Auth</h1>
        </>
    )
}

export default Auth