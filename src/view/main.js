import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
 } from 'react-router-dom'
 import { 
    TransitionGroup, 
    CSSTransition 
} from "react-transition-group";

import Layout from '../component/Layout'

import App from '../view/App'
import About from '../view/About'
import Inbox from '../view/Inbox'
import NoMatch from '../NotFound'


const router = ( 
    <Router>
        <Route render={({ location }) => (
            <Layout>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <TransitionGroup>
                    {/* no different than other usage of CSSTransition, just make sure to pass `location` to `Switch` so it can match the old location as it animates out */}
                    <CSSTransition key={location.key} classNames="fade" timeout={100}>
                        <Switch location={location}>
                            <Route path="/home" component={App}/>
                            <Route path="/about" component={About}/>
                            <Route path="/inbox" component={Inbox}/>
                            <Route component={NoMatch} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Layout>
            )} />
    </Router>
)

export default router