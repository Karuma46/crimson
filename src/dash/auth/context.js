import React, {createContext, useState, useEffect} from 'react'
import jwt from 'jsonwebtoken'

const UserContext = createContext({
    user: {},
    setUser: () => {}
})

export const UserProvider = (props) => {

    const [user,setUser] = useState({})

    useEffect(() => {
        if(localStorage.getItem('user')){
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    },[])

    return(
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export const LoggedIn = () => {
    if(localStorage.getItem('user') !== null){
        var token = JSON.parse(localStorage.getItem('user')).access
        var expiry = new Date(jwt.decode(token).expiry).getTime()
        var now = new Date()
        if((expiry - now) < 0){
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

export default UserContext