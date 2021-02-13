import React from 'react';
import Search from './Search';
import QuickApi from './QuickApi';

const Home = (props) => {
    console.log(props); 
    return(
        <div>
            <Search/>
            <QuickApi/>
        </div>
    )
}

export default Home;