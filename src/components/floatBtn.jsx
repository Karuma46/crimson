import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faPhone, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'

const FloatBtn = () =>{

    const [active, setActive] = useState(false)

    const showBtn = () => {
        let btn = document.getElementById('float')
        let btns = document.getElementById('floaters')

        document.addEventListener('scroll', () => {
            if(window.scrollY > 450 ){
                btn.style.right = '20px'
                btns.style.right = '30px'
            } else if(window.scrollY < 450) {
                btn.style.right = '-100px'  
                btns.style.right = '-100px'  
            }
        })
    }

    const showFloaters = () =>{
        var floaters = document.getElementById('floaters')
        if(floaters.style.height === '160px'){
            floaters.style.height = '40px'
            floaters.style.bottom = '60px'
            setActive(false)
        } else {
            floaters.style.height = "160px"
            floaters.style.bottom = '130px'
            setActive(true)
        }
    }

    const linkToMail = () =>{
        window.location.href = 'mailto:info@crimsontraders.com'
    }

    const linkToPhone = () =>{
        window.location.href = 'tel:1234567890'
    }

    const linkToWhatsapp = () =>{
        window.location.href = 'https://wa.me/2547123456789'
    }

    useEffect(() => {
        showBtn()
    }, [])



    return(
        <>
            <div id="float" onClick={() => showFloaters()}>
                <span id="dots">
                    {
                        active ? (
                            <FontAwesomeIcon icon={faTimes} color="white" />
                        ) : (
                            <FontAwesomeIcon icon={faEllipsisV} color="white" />
                        )
                    }
                </span>
            </div>

            <div id="floaters">
                <span className="floaterSpans" id="floater1" onClick={linkToPhone}>
                    <FontAwesomeIcon icon={faPhone} color="white" />
                </span>

                <span className="floaterSpans" id="floater2" onClick={linkToWhatsapp}>
                    <FontAwesomeIcon icon={faWhatsapp} color="white" />
                </span>

                <span className="floaterSpans" id="floater3" onClick={linkToMail}>
                    <FontAwesomeIcon icon={faEnvelope} color="white" />
                </span>
            </div>

            
        </>
    )
}

export default FloatBtn