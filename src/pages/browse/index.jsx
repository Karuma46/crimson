import React, {useEffect, useContext} from 'react'
import {Row, Col} from 'react-bootstrap'


import Header from 'components/header'
import Spinner from 'components/spinner'
import Listing from './components/listing'
import Sort from './components/sort'
import FloatBtn from 'components/floatBtn'

import ListingsContext, {ListingsProvider} from './components/context'

const Listings = () =>{

    const {listings} = useContext(ListingsContext)

    return(
        <>
            <Row id="listings" className="browse">
                {/* <Col xs="0" lg="4" className="sideBar-listings-left">
                    <FilterForm />
                </Col> */}
                <Col xs="12" lg="9" className="mgx-auto">
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
                <Header classs="down"/>
                <Listings />
                <FloatBtn />
            </ListingsProvider>
        </>
    )
}

export default Browse