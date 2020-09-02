import React, {useEffect, useState} from 'react'
import {Route} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import FilterForm from 'pages/browse/components/filterForm'
import List from './components/list'
import Edit from './components/editListing'
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
                <Route exact path="/dash/listings" render={() => (
                    <>
                        <Col xs="4" className="sideBar-listings-left">
                            <FilterForm/>
                        </Col>
                        <Col xs="8">
                            <>
                                <List listings={list}/>
                            </>  
                        </Col>
                    </>
                )}/>
                <Route exact path="/dash/listings/edit" render={(props) => (
                    <>
                        
                        <Col xs="8">
                            <>
                                <h3>Edit Listing</h3>
                                <Edit props={props} />
                            </>  
                        </Col>
                        <Col xs="4" className="sideBar-listings-right">
                            <h3>Image Upload</h3>
                        </Col>
                    </>
                )} />

                <Route exact path="/dash/listings/new" render={(props) => (
                    <>
                        <Col xs="8">
                            <>
                                <h3>Edit Listing</h3>
                                <Edit props={props}/>
                            </>  
                        </Col>

                        <Col xs="4" className="sideBar-listings-right">
                            <h3>Image Upload</h3>
                        </Col>
                    </>
                )} />

            </Row>
        </>
    )
}

export default Listings

