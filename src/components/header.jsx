import React, {useEffect} from 'react'
import Logo from 'assets/images/logo.svg'
import {Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Header = () =>{

    const getScrollPosition = () => {
        let header = document.getElementById('header')

        document.addEventListener('scroll', () => {
            if(window.scrollY > 60){
                header.classList.add('down')
            } else if(window.scrollY < 60) {
                header.classList.remove('down')
            }
            console.log(window.scrollY)
        })
        
    }   

    useEffect(() => {
       getScrollPosition()
    },[])

    return(
        <>  
            <Row id="header">
                <Col xs={12}>
                    <div id="logo">
                        <img src={Logo} alt="Crimson Traders Logo"/>
                    </div>

                    <div id="navBars">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Header