import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import Header from '../../Header';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/CostFilter'

const url = "https://eduintern.herokuapp.com/rest?mealtype=";

class ListingApi extends Component{
    constructor(props){
        super(props)

        this.state={
            restlist:''
        }
    }
    setDataPerFilter=(sortedData)=>{
        this.setState({restlist:sortedData})
    }
    render(){
        console.log(">>>",this.state.restlist)
        return(
           <div className="row" >
                <Header/>
                <div style={{marginLeft:'5%'}}>

                    <div className="col-md-2">
                        <CuisineFilter restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                        <CostFilter restPerCost={(data) => {this.setDataPerFilter(data)}}/>
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
        sessionStorage.setItem('mealId',mealid)
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