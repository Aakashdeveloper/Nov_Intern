import React from 'React';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Nav'

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;