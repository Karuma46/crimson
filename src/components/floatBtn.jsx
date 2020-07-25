import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEllipsisV, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const FloatBtn = () =>{

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
            // console.log(window.scrollY, window.innerHeight)
        })
    }

    const showFloaters = () =>{
        var floaters = document.getElementById('floaters')
        if(floaters.style.height === '160px'){
            floaters.style.height = '40px'
            floaters.style.bottom = '60px'
        } else {
            floaters.style.height = "160px"
            floaters.style.bottom = '130px'
        }
    }

    useEffect(() => {
        showBtn()
    }, [])



    return(
        <>
            <div id="float" onClick={() => showFloaters()}>
                <span id="dots">
                    <FontAwesomeIcon icon={faEllipsisV} color="white" />
                </span>
            </div>

            <div id="floaters">
                <span className="floaterSpans" id="floater1">
                    <FontAwesomeIcon icon={faPhone} color="white" />
                </span>

                <span className="floaterSpans" id="floater2">
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} color="white" />
                </span>

                <span className="floaterSpans" id="floater3">
                    <FontAwesomeIcon icon={faEnvelope} color="white" />
                </span>
            </div>

            
        </>
    )
}

export default FloatBtn