import React, {createContext, useState, useEffect} from 'react'
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

export const getRange = (list) => {
    const priceArr = []
    // list.forEach(element => {
    for(var i=0; i<list.length; i++){
        if(typeof(list[i].price) === 'number'){
            priceArr.push(list[i].price)
        }
    }
    priceArr.sort()
}


export default ListingsContext
