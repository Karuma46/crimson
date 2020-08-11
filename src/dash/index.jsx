import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './home'
import Auth from './auth'
import Listings from './listings'

const Dash = () => {
    return(
        <>  

            <Router>
                <Switch>
                    <Route exact path="/dash" component={Home} />
                    <Route exact path="/dash/auth" component={Auth} />
                    <Route path="/dash/listings" component={Listings} />
                </Switch>
            </Router>
        </>
    )
}

export default Dash