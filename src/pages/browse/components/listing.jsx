import React from 'react'
import {Row, Col} from 'react-bootstrap'
import numeral from 'numeral'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faMapMarker } from '@fortawesome/free-solid-svg-icons'


const Listing = ({obj}) => {

    return(
        <>
            <Row className="listing" key={obj.category+obj.id}>
                <Col xs="12" md="5">
                    <div className="listingImg">
                        <img src="" alt=""/>
                    </div>
                </Col>
                <Col xs="12" md="7">
                    <h3 className="listingTitle">{obj.title}</h3>
                    <span className="listingDetails">
                        {/* <FontAwesomeIcon icon={faMapMarker} />  */}
                        {obj.county} | {obj.category}
                    </span>
                    <p class="description">
                        {obj.desc}
                    </p>
                    <ul className="listingFeatures">
                        {
                            obj.features ? (
                                obj.features.split('|').map(item =>(
                                    <li key={item}>{item}</li>
                                ))
                            ):(
                                ''
                            )
                        }
                    </ul>
                    <p className="listingPrice">Ksh {numeral(obj.price).format('0.0 a')} </p>
                </Col>
            </Row>
        </>
    )
}

export default Listing