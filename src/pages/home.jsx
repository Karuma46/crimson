import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faArrowRight, faArrowLeft, faArrowDown, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import bg from 'assets/images/land.jpg'

const Landing = () => {
    return(
        <>
            <Row id="landing">
                <Col sm={12} id="text-wrap">
                    <div id="logo">
                        {/* <img src={Logo} alt="Crimson Traders Logo"/> */}
                    </div>

                    <div id="banner">
                        <h1>Lorem Ipsum Dolor is Met.</h1>
                        <p>
                            Lorem Ipsum is the random text we use as a placeholder. 
                            Lorem Ipsum is the random text we have to use as a placeholder.
                        </p>
                    </div>
                    
                    <div id="ctaBtn">
                        <button className="btnWrap">
                           <h4>GIVE US A CALL <br/> <span>+254 728 753 983</span> </h4>
                            <FontAwesomeIcon icon={faPhone} size="2x" />
                        </button>
                    </div>

                    <div id="bgImg">
                        <img src={bg} alt=""/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

const Categories = () => {
    return(
        <>
            <Row className="categories">
                <Col xs={12} md={6}>
                    <div className="catText">
                        <h1>LAND?</h1>
                        <p>We Got It! <FontAwesomeIcon icon={faArrowRight} /> </p>
                    </div>

                </Col>
                <Col xs={12} md={6}>
                    <div className="catImg">
                        <span className="imgWrap">
                            <p></p>
                        </span>
                    </div>
                </Col>
            </Row>

            <Row className="categories">
                <Col xs={12} md={6}>
                    <div className="catText" id="houseText">
                        <h1>HOUSE?</h1>
                        <p> <FontAwesomeIcon icon={faArrowLeft} /> Come See One!</p>
                    </div>

                </Col>
                <Col xs={12} md={6}>
                    <div className="catImg">
                        <span className="imgWrap">
                            <p></p>
                        </span>
                    </div>
                </Col>
            </Row>

            <Row className="categories">
                <Col xs={12}>
                    <div className="catText" id="apartText">
                        <h1>APARTMENT?</h1>
                        <p>Location! Location! Location!</p>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </div>

                </Col>
                <Col xs={12}>
                    <div className="catImg">
                        <span className="imgWrap">
                            <p></p>
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    )
}

const Form = () => {
    return(
        <>
            <Row id="form">
                <Col xs={12} md={8}>
                    <h2>SUBSCRIBE FOR UPDATES</h2>
                    <p>Get regular email updates on new listings and great offers as they become available.</p>

                    <form>
                        <input type="email" placeholder="Email Address" />
                        <button type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                </Col>
            </Row>

        </>
    )
}

const Footer = () => {
    return(
        <>
            <Row id="footer" md={9}>
                <Col xs={6}>
                    <p>
                        4th Floor, Manyumba Hse <br/>
                        Shamba Ave, <br/>
                        Nairobi
                    </p>
                </Col>

                <Col xs={6} id="copyText">
                    <p> © 2020 </p>
                </Col>
            </Row>
        </>
    )
}

const Home = () => {
    return(
        <>
            <Landing />
            <Categories />
            <Form />
            <Footer />
        </>
    )
}

export default Home