import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import NavBar from './Nav';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import AboutDetails from './AboutDetails'

const Routing = () => {
    return(
        <BrowserRouter>
        <div>
            <NavBar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route  path="/about/:topic" component={AboutDetails}/>
            <Route  path="/contact" component={Contact}/>
            <Footer year="2021"/>
        </div>
    </BrowserRouter>
    )
}

export default Routing