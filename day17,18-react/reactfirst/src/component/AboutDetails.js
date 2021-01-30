import React from 'react';

const AboutDetails = (props)=>{
    console.log(props)
    //console.log(props.match.params.topic)
    //req.params.topic
    console.log(props.location.search)
    console.log(props.location.search.split('='))
    console.log(props.location.search.split('=')[1])
    //req.query.name
    return(
        <div>
            <h2>About Details for {props.match.params.topic} name {props.location.search.split('=')[1]}</h2>
        </div>
    )
}

export default AboutDetails;