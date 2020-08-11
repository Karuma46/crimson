import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSortAlphaUp, faSortNumericUp, faSortAmountUpAlt, faSpinner} from '@fortawesome/free-solid-svg-icons'
import {Row, Col} from 'react-bootstrap'

const Sort = () =>{
    return(
        <>
            <Row id="sortDiv" xs="12">
                <Col xs="6">
                    <h3>Browse</h3>
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

export default Sort