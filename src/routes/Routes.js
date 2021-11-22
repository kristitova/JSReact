import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Profile } from './Profile';
import { Chats } from './Chats';
import { NotFound } from './NotFound';
import { Gists } from './Gists';
import { SignUp } from './SignUp';
import { Login } from './Login';
import { useSelector, useDispatch } from 'react-redux';
import { getisAuth } from '../Redux/store/User_/selectors';
import { initAuthAction } from '../Redux/store/User_/actions';
import { PrivateRoute, PublicRoute } from './../hocs/RouteAccess';



export const Routes = (props) => {

    const isAuth = useSelector(getisAuth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initAuthAction)

    }, []);

    return (
        <Switch>
            <Route path='/chats' component={Chats} />
            <Route path='/profile' component={Profile} />
            <Route path='/gists' component={Gists} />
            <Route exact path='/' component={Home} />
            <Route path='/404' component={NotFound} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={Login} />

            <PublicRoute auth={isAuth} path="/" component={Home} />
            <PublicRoute auth={isAuth} path="/login" component={Login} />
            <PublicRoute auth={isAuth} path="/signup" component={SignUp} />
            <PublicRoute auth={isAuth} path="/gists" component={Gists} />

            <PrivateRoute auth={isAuth} path='/chats' component={Chats} />
            <PrivateRoute auth={isAuth} path='/profile' component={Profile} />

        </Switch >
    );
}
