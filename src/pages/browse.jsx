import React, {useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSortAlphaUp, faSortNumericUp, faSortAmountUpAlt} from '@fortawesome/free-solid-svg-icons'

const Filter = () =>{
    return(
        <>
            <Row id="sortDiv" xs="12" >
                <Col xs="6">
                    <h3>Filter</h3>
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

const Listings = () =>{
    return(
        <>
            <Row id="listings">
                <Col xs="0" lg="4"></Col>
                <Col xs="12" lg="8">
                    <Filter />

                    <Row className="listing">
                        <Col xs="12" md="6">
                        <div className="listingImg">
                            <img src="" alt=""/>
                        </div>
                        </Col>
                        <Col xs="12" md="6">
                            <h3 className="listingTitle">This is the title</h3>
                            <ul className="listingFeatures">
                                <li>Features</li>
                                <li>Features</li>
                                <li>Features</li>
                                <li>Features</li>
                            </ul>
                            <p className="listingPrice">KES 23M</p>
                        </Col>
                    </Row>

                    <Row className="listing">
                        <Col xs="12" md="6">
                        <div className="listingImg">
                            <img src="" alt=""/>
                        </div>
                        </Col>
                        <Col xs="12" md="6">
                            <h3 className="listingTitle">This is the title</h3>
                            <ul className="listingFeatures">
                                <li>Features</li>
                                <li>Features</li>
                                <li>Features</li>
                                <li>Features</li>
                            </ul>
                            <p className="listingPrice">KES 23M</p>
                        </Col>
                    </Row>

                    <Row className="listing">
                        <Col xs="12" md="6">
                        <div className="listingImg">
                            <img src="" alt=""/>
                        </div>
                        </Col>
                        <Col xs="12" md="6">
                            <h3 className="listingTitle">This is the title</h3>
                            <ul className="listingFeatures">
                                <li>Features</li>
                                <li>Features</li>
                                <li>Features</li>
                                <li>Features</li>
                            </ul>
                            <p className="listingPrice">KES 23M</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}


const Browse = () => {

    useEffect(() => {
        let header = document.getElementById('header')
        header.classList.add('down')
    }, [])

    return(
        <>
            <Listings />
        </>
    )
}

export default Browse