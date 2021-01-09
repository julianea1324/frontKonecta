import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import {PublicRoute} from './../router/PublicRoute'
import {PrivateRoute} from './../router/PrivateRoute'
import { LoginScreen } from './../componentes/auth/LoginScreen';
import { Blog } from '../componentes/blog/Blog';
import { ReadOneBlog } from '../componentes/blog/ReadOneBlog';
import { ReadCategories } from '../componentes/categories/ReadCategories';
import { ReadAllUsers } from '../componentes/users/ReadAllUsers';
import { ReadOneUser } from '../componentes/users/ReadOneUser';

export const AppRouter = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])
    const {id} = useSelector(state => state.auth)
     const checking = localStorage.getItem('checking')

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={!!checking} exact path="/login" component={ LoginScreen } />     
                    <PrivateRoute isAuthenticated={!!checking} exact path="/" component={ Blog } />
                    <PrivateRoute isAuthenticated={!!checking} exact path="/readOneBlog" component={ ReadOneBlog } />
                    <PrivateRoute isAuthenticated={!!checking} exact path="/readCategories" component={ ReadCategories } />
                    <PrivateRoute isAuthenticated={!!checking} exact path="/users" component={ ReadAllUsers } />
                    <PrivateRoute isAuthenticated={!!checking} exact path="/user" component={ ReadOneUser } />


                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}
