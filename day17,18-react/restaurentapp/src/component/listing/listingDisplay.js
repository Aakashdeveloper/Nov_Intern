import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';

const ListingDisplay = (props) => {
    const renderList = ({restaurentList}) => {
        if(restaurentList){
            return restaurentList.map((item) => {
                return(
                    <div class="first">
                        <div class="maindiv">
                            <div class="image">
                                <img src={item.thumb}
                                className="imgClass"/>
                            </div>
                            <div className="details">
                                <h1><Link to={`/details/${item._id}`}>
                                    {item.name}
                                </Link></h1>
                                <p>Rs.{item.cost} Per Two</p>
                                <p>{item.city_name}</p>
                            </div>
                        </div>
                        <hr/>
                        <div class="moredetails">
                            <h2>Address</h2>
                            <p>{item.locality}</p>
                            <p>{item.address}</p>
                        </div>
                    </div>
                )
            })
        }else
        {
            return(
                <div>
                    <img src="/images/loader.gif"/>
                </div>
            )
        }
    }

    return(
        <>
        {renderList(props)}
        </>
    )
}

export default ListingDisplay