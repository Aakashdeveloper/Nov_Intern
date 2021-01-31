import React,{Component} from 'react';
import axios from 'axios';

const url ="https://eduintern.herokuapp.com/rest"

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:''
        }
    }

    render(){
        return(
            <div>Details</div>
        )
    }

    componentDidMount(){
        const hotelId=this.props.match.params.id
        axios.get(`${url}/${hotelId}`)
        .then((res) => {console.log(res.data[0])})
    }
}

export default Details;