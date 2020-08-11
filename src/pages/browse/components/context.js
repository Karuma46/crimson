import React, {createContext, useContext, useState, useEffect} from 'react'
import Api from 'config/api'


const ListingsContext = createContext({
    listings: [],
    setListings : () => {}
})

export const ListingsProvider = (props) =>{
    
    const [listings, setListings] = useState([])

    const getListings = () =>{
        Api.listings.get()
        .then(res =>{
            setListings(res.data)
        })
    }

    useEffect(() =>{
        getListings()
    },[])

    return(
        <ListingsContext.Provider value={{listings, setListings}}>
            {props.children}
        </ListingsContext.Provider>
    )
}


export default ListingsContext
