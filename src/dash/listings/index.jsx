import React, {useEffect, useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'

import List from './list'
import Edit from './editListing'

import Api from 'config/api'

const Listings = () =>{

    const [list, setList] = useState([])
    
    const getListings = () =>{
        Api.listings.get()
        .then(res=>{
            setList(res.data)
        })
    }

    useEffect(() => {
        document.title = "Listings | Crimsont Traders"
        getListings()
    },[])

    return(
        <>
            <Row id="listings">
                <Col xs="4">
                    <h3>Options</h3>
                </Col>
                <Col xs="8">
                    <Switch>

                        <Route exact path="/dash/listings" render={() => (
                            <>
                                <List listings={list}/>
                            </>
                        )}/>

                        <Route exact path="/dash/listings/edit" render={(props) => (
                            <>
                                <h3>Edit Listing</h3>
                                <Edit props={props} />
                            </>
                        )} />
                        
                    </Switch>
                </Col>
            </Row>
        </>
    )
}

export default Listings