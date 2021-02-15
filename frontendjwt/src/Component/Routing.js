import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import UserList from './UserList';
import RegisterComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';
import ProfileComponent from './Profile'

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={RegisterComponent}/>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/profile" component={ProfileComponent}/>
                <Route exact path="/list" component={UserList}/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;