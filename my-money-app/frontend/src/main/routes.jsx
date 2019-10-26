import React from 'react'
import { Router, Route, Redirect, hashHistory, IndexRoute} from 'react-router'

import App from './app'
import Dashboard2 from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Dashboard2} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        
        <Redirect from='*' to='/' />
    </Router>    
)