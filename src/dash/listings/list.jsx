import React, {useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {faSortAlphaUp, faSortNumericUp, faSortAmountUpAlt, faSpinner} from '@fortawesome/free-solid-svg-icons'
import Spinner from 'components/spinner'


const Listing = ({obj}) => {
    
    useEffect(() => {
    })

    return(
        <>
            <Row className="listing">
                <Col xs="12" md="6">
                    <div className="listingImg">
                        <img src="" alt=""/>
                    </div>
                </Col>
                <Col xs="12" md="6">
                    <h3 className="listingTitle"> {obj.title} </h3>
                    <ul className="listingFeatures">
                        {
                            obj.features ? (
                                obj.features.split('|').map(feat => (
                                    <li> {feat} </li>
                                ))
                            ): (
                                ''
                            )
                        }
                    </ul>
                    <p className="listingPrice">KES 23M</p>
                    <p className="editBtn">
                        <Link to={{pathname:"listings/edit", state:obj}}>
                            <FontAwesomeIcon icon={faPen} size="xs" />
                        </Link>
                    </p>
                </Col>
            </Row>
        </>
    )
}


const List = ({listings}) =>{

    useEffect(() => {
        
    })

    return(
        <>  
            <Sort />
            {
                listings && listings.length > 0 ? (
                    listings.map(listing =>(
                        <Listing obj={listing} key={listing.id} />
                    ))
                ) : (
                    <Spinner />
                )
            }
            
        </>
    )
}


const Sort = () =>{
    return(
        <>
            <Row id="sortDiv" xs="12">
                <Col xs="6">
                    <h3>Listings</h3>
                </Col>
                <Col xs="6" id="sortBtns">
                    <span>
                        <FontAwesomeIcon icon={faSortAlphaUp} />
                    </span>

                    <span>
                        <FontAwesomeIcon icon={faSortAmountUpAlt} />
                    </span>

                    <span>
                        <FontAwesomeIcon icon={faSortNumericUp} />
                    </span>
                </Col>
            </Row>
        </>
    )
}

export default List