import React,{Component} from 'react';
import axios from 'axios';
import RestDisplay from './RestaurentDisplay';

const url = "https://developersprestapis.herokuapp.com/restaurantdetails"

class RestaurentDetails extends Component{
    constructor(){
        super()
        this.state={
            details:''
        }
    }

    render(){
        return(
            <React.Fragment>
                <RestDisplay  restData={this.state.details}/>
            </React.Fragment>
        )
    }

    async componentDidMount(){
        var hotelid = this.props.match.params.id
        let response =  await axios.get(`${url}/${hotelid}`)
        this.setState({details:response.data[0]})
    }

    
    
}

export default RestaurentDetails;