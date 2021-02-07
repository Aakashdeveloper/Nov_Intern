import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Listing from './component/listing/listingApi';
import Details from './component/details/HotelDetail';
import DisplayApi from './component/booking/DisplayApi';
import PlaceBooking from './component/booking/placeBooking';

const Routing = () => {
    return(
        <BrowserRouter> 
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:id" component={Listing}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/viewbooking" component={DisplayApi}/>
            <Route path="/booking/:name" component={PlaceBooking}/>
        </BrowserRouter>
    )
}

export default Routing;