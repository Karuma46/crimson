import React, {createContext, useState, useEffect} from 'react'

const UserContext = createContext({
    user: {},
    setUser: () => {}
})

export const UserProvider = (props) => {

    const [user,setUser] = useState({})

    useEffect(() => {
        // check localstorage. if exists push to context
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

export default UserContext