import React from 'react'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faSortAlphaUp, faSortNumericUp, faSortAmountUpAlt, faSpinner} from '@fortawesome/free-solid-svg-icons'
import {Row, Col} from 'react-bootstrap'
// import ListingsContext from './context'
// import _ from 'underscore'

const Sort = () =>{

    // const {listings, setListings} = useContext(ListingsContext)
    // const [sortState, setSortState] = useState({})
    
    // const handleSortByTitle = () => {
    //     var np = [...listings]
    //     setListings([])
    //     setListings(_.sortBy(np, 'title'))
    // }

    // const handleSortByPrice = () => {
    //     var np = [...listings]
    //     setListings([])
    //     setListings(_.sortBy(np, 'price'))
    // } 

    return(
        <>
            <Row id="sortDiv" xs="12">
                <Col xs="6">
                    <h3>Browse</h3>
                </Col>
                <Col xs="6" id="sortBtns">
                    {/* <span onClick={handleSortByTitle}>
                        <FontAwesomeIcon icon={faSortAlphaUp} />
                    </span>

                    <span onClick={handleSortByPrice}>
                        <FontAwesomeIcon icon={faSortAmountUpAlt} />
                    </span>

                    <span onClick={handleSortByPrice}>
                        <FontAwesomeIcon icon={faSortNumericUp} />
                    </span> */}
                </Col>
            </Row>
        </>
    )
}

export default Sort