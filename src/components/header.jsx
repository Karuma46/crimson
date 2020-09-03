import React, {useEffect} from 'react'
import Logo from 'assets/images/logo.svg'
import {Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Header = () =>{

    const showSideBar = () => {
        document.getElementById('sidebar').style.left = '0px'; 
        document.getElementById('sideMenu').style.display = 'block'; 
    }

    const getScrollPosition = () => {
        let header = document.getElementById('header')

        document.addEventListener('scroll', () => {
            if(window.scrollY > 60){
                header.classList.add('down')
            } else if(window.scrollY < 60) {
                header.classList.remove('down')
            }
        })
        
    }   

    useEffect(() => {
       getScrollPosition()
    },[])

    return(
        <>  
            <Row id="header">
                <Col xs={12} id="header-wrap">

                    <div id="navBars" onClick={showSideBar}>
                        <FontAwesomeIcon icon={faBars} color="#002D4F" size="lg" />
                    </div>

                    <div id="logo">
                        <a href="/">
                            <img src={Logo} alt="Crimson Traders Logo"/>
                        </a>
                    </div>

                    {/* <div id="navBars">
                        <FontAwesomeIcon icon={faBars} />
                    </div> */}

                    {/* <div id="navMenu">
                        <span>
                            <a href="/browse">BROWSE</a>
                        </span>

                        <span>
                            <a href="">ABOUT US</a>
                        </span>

                        <span>
                            <a href="">CONTACT US</a>
                        </span>
                    </div> */}
                </Col>
            </Row>
        </>
    )
}


export const Header2 = () =>{
    return(
        <>  
            <Row id="header2">
                <Col xs={12}>
                    <div id="logo">
                        <a href="/">
                            <img src={Logo} alt="Crimson Traders Logo"/>
                        </a>
                    </div>

                    <div id="navBars">
                        <FontAwesomeIcon icon={faBars} />
                    </div>

                    <div id="navMenu">
                        <span>
                            <a href="/browse">BROWSE</a>
                        </span>

                        <span>
                            <a href="/about-us">ABOUT US</a>
                        </span>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Header