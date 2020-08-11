import React, {useEffect} from 'react'

const Home = () =>{

    useEffect(() => {
        document.title = 'Dashboard | Crimsont Traders'
    },[])

    return(
        <>
            <h1>This is the dash!</h1>
        </>
    )
}

export default Home