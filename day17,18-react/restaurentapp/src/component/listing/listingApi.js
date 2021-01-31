import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import {Link} from 'react-router-dom';

const url = "https://eduintern.herokuapp.com/rest?mealtype=";

class ListingApi extends Component{
    constructor(props){
        super(props)

        this.state={
            restlist:''
        }
    }
    render(){
        console.log(">>>",this.state.restlist)
        return(
           <div className="row" >
               <div id="header">
                    <Link className="logo" to="/">Edureka</Link>
                    <span className="leftopt" style={{float:'right'}}>Developer Funnel</span>
                </div>
                <div style={{marginLeft:'5%'}}>

                    <div className="col-md-2">
                        Filter Here
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay restaurentList={this.state.restlist}/>
                    </div>
                </div>
           </div>
        )
    }

    componentDidMount(){
        var mealid = this.props.match.params.id
        axios.get(`${url}${mealid}`)
        .then((response) => {this.setState({restlist:response.data})})
    }

    /*
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        //setting data in state
        .then((data)=> this.setState({city:data}))
    }*/
}


export default ListingApi;