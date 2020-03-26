import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Agenda from './pages/Agenda';
import NovaAgenda from './pages/NovaAgenda';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/agenda/new" component={NovaAgenda} />
                <Route path="/agenda" component={Agenda} />
            </Switch>
        </BrowserRouter>
    );
}