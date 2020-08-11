import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'


const Spinner = () => {
    return(
        <>  
            <div id="spinnerWrap">
                <FontAwesomeIcon icon={faSpinner} size="6x" spin />
                <p>Loading.Please wait...</p>
            </div>
        </>
    )
}

export default Spinner