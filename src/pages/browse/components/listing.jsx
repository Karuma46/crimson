import React from 'react'
import {Row, Col} from 'react-bootstrap'

const Listing = ({obj}) => {

    return(
        <>
            <Row className="listing">
                <Col xs="12" md="6">
                    <div className="listingImg">
                        <img src="" alt=""/>
                    </div>
                </Col>
                <Col xs="12" md="6">
                    <h3 className="listingTitle">{obj.title}</h3>
                    <ul className="listingFeatures">
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                        <li>Features</li>
                    </ul>
                    <p className="listingPrice">KES 23M</p>
                </Col>
            </Row>
        </>
    )
}

export default Listing