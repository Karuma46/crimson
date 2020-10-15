import React, {useEffect, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faPen } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {faSortAlphaUp, faSortNumericUp, faSortAmountUpAlt} from '@fortawesome/free-solid-svg-icons'
import Spinner from 'components/spinner'
import numeral from 'numeral'


export const ListingImg = ({imgs}) => {

    const [slide, setSlide] = useState(0);

    const slideNext = () =>{
        slide+1 < imgs.length-1 ? setSlide(slide + 1) : setSlide(0)
    }

    const slideBack = () => {
        slide-1 > 0 ? setSlide(slide - 1) : setSlide(imgs.length-1)
    }

    return(
        <>
            <div className="listingImg">
                <div className="sliderWrap">

                    <span className="prevSlide" onClick={slideBack}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                    
                    <span className="nextSlide" onClick={slideNext}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                    
                        {
                            imgs.length > 0 ? (
                                <div className="imgslide">
                                    <img src={`http://localhost:8000/storage/${imgs[slide].url}`} alt="" />
                                </div>
                            ) : ('')
                        }
                </div>
            </div>
        </>
    )
}

const Listing = ({obj}) => {
    
    useEffect(() => {
    })

    return(
        <>
            <Row className="listing">
                <Col xs="12" md="6">
                    <ListingImg imgs={obj.images} />
                </Col>
                <Col xs="12" md="6">
                <h3 className="listingTitle">{obj.title}</h3>
                    <span className="listingDetails">
                        {/* <FontAwesomeIcon icon={faMapMarker} /> */}
                        {obj.category}
                    </span>
                    <p className="description">
                        {obj.description}
                    </p>
                    {/* <ul className="listingFeatures">
                        {
                            obj.features ? (
                                obj.features.split('|').map(item =>(
                                    <li key={item}>{item}</li>
                                ))
                            ):(
                                ''
                            )
                        }
                    </ul> */}
                    <p className="listingPrice">KSH {numeral(obj.price).format('0a')} </p>
                    <p className="editBtn">
                        <Link to={{pathname:`listings/edit/${obj.id}`, state:obj}}>
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
                    <Link to="/dash/listings/new">
                        <span className="button"> Add New Listing</span>
                    </Link>
                </Col>
            </Row>
        </>
    )
}

export default List