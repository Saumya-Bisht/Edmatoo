import React,{Component} from 'react';
import axios from 'axios';

let sorturl="https://developersprestapis.herokuapp.com/restaurantList";


class sortFilter extends Component{
    sortfilter = (event) => {
        let sortType = Number(event.target.value);
        let mealType = sessionStorage.getItem('mealid');
        let outurl
        outurl=`${sorturl}/${mealType}?sort=${sortType}`
        console.log(outurl)
        axios.get(outurl)
        .then((response) => {this.props.sortdata(response.data)})
    }
    
    render(){
        return(
            <React.Fragment>
                <center>Sort Filter</center>
                <div onChange={this.sortfilter}>
                    <label className="radio">
                        <input type="radio" value="1" name="filter"/>Low To High
                    </label>
                    <label className="radio">
                        <input type="radio" value="-1" name="filter"/>High To Low
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default sortFilter;