import React,{Component} from 'react';
import './Search.css';

const url = "https://eduintern.herokuapp.com/city";

class Search extends Component{

    constructor(){
        super()

        this.state={
            city:''
        }
    }

    //Display City in option
    renderCity = (data) => {
        if(data){
            return data.map((item)=>{
                return(
                    <option>{item.name} | {item.city_name}</option>
                )
            })
        }
    }

    render(){
        return(
            <React.Fragment>
                <div class="imageContainer">
                    <div style={{textAlign:'right'}}>
                        <a className="fb myfont" href="https://www.facebook.com/" target="_blank">
                            <img src="/images/facebook.png" className="social_logo"/>
                        </a>
                        <a class="yt myfont" href="https://www.youtube.com/developerfunnel" target="_blank">
                            <img src="/images/youtube.png" className="social_logo"/>
                        </a>
                    </div>
                    <div id="logo">
                        <b>e!</b>
                    </div>
                    <div id="heading">
                        Find Bést Restaurants, Cafés, bars
                    </div>
                    <div className="locationSelector">
                        <select class="dropdown">
                            <option>----SELECT CITY----</option>
                            {this.renderCity(this.state.city)}
                        </select> 
                        <select className="dropdown">
                            <option value="1">Ama Cafe</option>
                            <option value="2">Village Balcony</option>
                            <option value="3">Dhaba Sector 17</option>
                        </select>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    //call api to get data
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        //setting data in state
        .then((data)=> this.setState({city:data}))
    }
}

export default Search;