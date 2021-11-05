import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Profile } from './Chats/routes/Profile';
import { Chats } from './Chats';
import { NotFound } from './NotFound';

export const Routes = (props) => {

    return (
        <Switch>
            <Route path='/chats' component={Chats} />
            <Route path='/profile' component={Profile} />
            <Route exact path='/' component={Home} />
            <Route path='/404' componet={NotFound} />
        </Switch >
    );
}