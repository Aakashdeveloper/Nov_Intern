import React from 'react';
import './QuickSearch.css';

const QuickSearch =(props) => {
        const renderList = ({quickData}) => {
            if(quickData){
                return quickData.map((item) => {
                    return(
                        <div class="tileContainer">
                            <div class="tileComponent1">
                                <img src={`/images/${item.name}.png`} className="imageStyle"/>
                            </div>
                            <div class="tileComponent2">
                                <div class="componentHeading">
                                    {item.name}
                                </div>
                                <div class="componentSubHeading">
                                    Start Your Day with Exclusive {item.name} Options
                                </div>
                            </div>
                        
                        </div>
                    )
                })
            }
        }
        return(
            <div class="quickSearchContainer"> 
                <p class="quickSearchHeading">
                    Quick Searches
                </p>
                <p class="quickSearchSubHeading">
                    Discover Réstaurants By Meal Type
                </p>
                {renderList(props)}
            </div>
        )
}

export default QuickSearch;