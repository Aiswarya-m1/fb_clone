import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
    import {Home} from './Home';

import {Storyreed} from './Storyreed';
import Messagecenter from './Messagecenter';
const Routerer = () => {
    return (
        <div>
                <Router>
  <Switch>
  <Route exact path='/' component={Home}></Route>
<Route  path='/Storyreed' component={Storyreed}></Route>
<Route  path='/Messagecenter' component={Messagecenter}></Route>
  </Switch>
     </Router>
        </div>
    )
}

export default Routerer
