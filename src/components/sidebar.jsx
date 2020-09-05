import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {

    const hideBar = () => {
        document.getElementById('sidebar').style.left = '-320px'; 
        document.getElementById('sideMenu').style.display = 'none';
    }

    return(
        <>
            <Row id="sidebar">
                <Col xs="12" className="closeCol">
                    <div id="closeBar" onClick={hideBar}>
                        <FontAwesomeIcon icon={faTimes} color="white" size="lg" />
                    </div>
                </Col>

                <Col xs="12" className="menuCol">
                    <div id="sideMenu">
                        <span>
                            <a href="/">HOME</a>
                        </span>
                        <span>
                            <a href="/browse">BROWSE</a>
                        </span>
                        <span>
                            <a href="/">ABOUT US</a>
                        </span>

                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Sidebar