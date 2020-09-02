import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Logo from 'assets/images/logo.svg'

const Header = () =>{
    return(
        <>  
            <Row id="header2">
                <Col xs={12}>
                    <div id="logo">
                        <a href="/">
                            <img src={Logo} alt="Crimson Traders Logo"/>
                        </a>
                    </div>

                    <Row id="menu">
                        <Col>
                            <a href="/dash">Dash</a>
                        </Col>

                        <Col>
                            <a href="/dash/about">About</a>
                        </Col>

                        <Col>
                            <a href="/dash/listings">Listings</a>
                        </Col>

                        <Col>
                            <a href="/dash/listings">Log Out</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Header