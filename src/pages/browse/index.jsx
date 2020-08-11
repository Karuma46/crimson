import React, {useEffect, useState, useContext} from 'react'
import {Row, Col} from 'react-bootstrap'


import Header from 'components/header'
import Spinner from 'components/spinner'


import FilterForm from './components/filterForm'
import Listing from './components/listing'
import Sort from './components/sort'

import ListingsContext, {ListingsProvider} from './components/context'

const Listings = () =>{

    const {listings, setListings} = useContext(ListingsContext)

    return(
        <>
            <Row id="listings">
                <Col xs="0" lg="4">
                    <FilterForm />
                </Col>
                <Col xs="12" lg="8">
                    <Sort />
                    {
                        listings.length !== 0 ? (
                            <>  
                            {
                                listings.map(listing =>(
                                    <Listing obj={listing} key={listing.id}/>
                                ))
                            }
                            </>
                        ) : (
                            <>
                                <Spinner />
                            </>
                        )
                    }
                </Col>
            </Row>
        </>
    )
}

const Browse = () => {
        
    useEffect(() => {
        document.title = 'Browse | Crimsont Traders.'
    }, [])

    return(
        <>
            <ListingsProvider>
                <Header />
                <Listings />
            </ListingsProvider>
        </>
    )
}

export default Browse