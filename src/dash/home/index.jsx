import React, {useEffect} from 'react'

const Home = () =>{

    const isLoggedIn = () => {
        if(localStorage.getItem.user === undefined){
            window.location.href = '/dash/login'
        } else {
        }
    } 

    useEffect(() => {
        isLoggedIn()
        document.title = 'Dashboard | Crimsont Traders'
    },[])

    return(
        <>
        </>
    )
}

export default Home