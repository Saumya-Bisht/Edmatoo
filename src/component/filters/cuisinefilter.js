import React,{Component} from 'react';
import axios from 'axios';

const cusineurl="https://developersprestapis.herokuapp.com/restaurantList";


class CuisineFilter extends Component{
    cuisinefilter = (event) => {
        let cuisineType = event.target.value;
        let mealType = sessionStorage.getItem('mealid');
        let curl;
        if(cuisineType==''){
            curl= `${cusineurl}/${mealType}`
        }else{
            curl= `${cusineurl}/${mealType}?cuisine=${cuisineType}`
        }
        axios.get(curl)
        .then((response) => {this.props.cuisinedata(response.data)})
    
    }
    
    render(){
        return(
            <React.Fragment>
                <center>Cuisine Filter</center>
                <div onChange={this.cuisinefilter}>
                    <label className="radio">
                        <input type="radio" value="" name="filter"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="filter"/>North Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="filter"/>South Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="filter"/>Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="filter"/>Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" value="5" name="filter"/>Street Food
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CuisineFilter;