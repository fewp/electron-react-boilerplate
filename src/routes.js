import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// páginas
import Home from './pages/home';
import MissingPage from './pages/missing-page';


/* 
import Logon from './pages/home';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
 */
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route component={MissingPage} />
                {/* 
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
                */}
            </Switch>
        </BrowserRouter>
    )
}