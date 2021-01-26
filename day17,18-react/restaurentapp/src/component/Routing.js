import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import NavBar from './Nav';
import Footer from './Footer';
import About from './About';
import Contact from './Contact'

const Routing = () => {
    return(
        <BrowserRouter>
        <div>
            <NavBar/>
            <Route exact path="/" component={Home}/>
            <Route  path="/about" component={About}/>
            <Route  path="/contact" component={Contact}/>
            <Footer/>
        </div>
    </BrowserRouter>
    )
}

export default Routing