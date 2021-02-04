import React,{Component} from 'react';
import Header from './Header';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component{

    constructor(){
        super()

        this.state={
            news:JSON
        }
    }
    render(){
        return (
            <React.Fragment>
                <Header/>
                <NewsDisplay newsdata={this.state.news}/>
            </React.Fragment>
        )
    }
    
}

export default Home;