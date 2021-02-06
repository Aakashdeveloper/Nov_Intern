import React from 'react';
import {Link} from 'react-router-dom';

const About =(props) => {
    return(
        <>
            <hr/>
            <center>
                <h3>About Page</h3>
                <Link className="btn btn-success" to={`/about/company?name=Zomato`}>About Company</Link>
                <Link className="btn btn-warning" to={`/about/product`}>About Product</Link>
                <Link className="btn btn-info" to={`/about/city`}>About City</Link>
            </center>
        </>
    )
}

export default About;