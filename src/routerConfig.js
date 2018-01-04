import React from 'react';
import {Router,hashHistory,Route,IndexRoute,Redirect} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Subscribe from './components/Subscribe';
import Message from './components/Message';
import Enjoy from './components/Enjoy';
import Search from './components/Search';
import User from './components/User';
import Login from './components/Login';
import Reg from './components/Reg';
import Article from './components/Article';
import Error from './components/Error';

const RouterConfig=()=>(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home}/>
            <Route path="subscribe" component={Subscribe}/>
            <Route path="message" component={Message}/>
            <Route path="enjoy" component={Enjoy}/>
            <Route path="search" component={Search}/>
            <Route path="user" component={User}/>
            <Route path="login" component={Login}/>
            <Route path="reg" component={Reg}/>
            <Route path="article" component={Article}>
                <Route path=":aid" component={Article}/>
            </Route>
            <Route path="*" component={Error}></Route>
        </Route>
    </Router>
)
export default RouterConfig;