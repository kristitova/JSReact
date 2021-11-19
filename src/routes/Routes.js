import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Profile } from './Profile';
import { Chats } from './Chats';
import { NotFound } from './NotFound';
import { Gists } from './Gists';


export const Routes = (props) => {

    return (
        <Switch>
            <Route path='/chats' component={Chats} />
            <Route path='/profile' component={Profile} />
            <Route path='/gists' component={Gists} />
            <Route exact path='/' component={Home} />
            <Route path='/404' componet={NotFound} />
        </Switch >
    );
}