import React,{Component} from 'react';
import axios from 'axios';

const costUrl = "https://developersprestapis.herokuapp.com/restaurantList"


class CostFilter extends Component{

    costfilter = (event) => {
        let costvalue = (event.target.value).split(',');
        let lcost = Number(costvalue[0]);
        let hcost = Number(costvalue[1]);
        let mealType = sessionStorage.getItem('mealid');

        let curl;
        if(costvalue==''){
            curl= `${costUrl}/${mealType}`
        }else{
            curl= `${costUrl}/${mealType}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(curl)
        .then((response) => {this.props.costdata(response.data)})
    
    }
    render(){
        return(
            <React.Fragment>
                <center>Cost Filter</center>
                <div onChange={this.costfilter}>
                    <label className="radio">
                        <input type="radio" value="" name="filter"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="100,300" name="filter"/>100-300
                    </label>
                    <label className="radio">
                        <input type="radio" value="301,500" name="filter"/>301-500
                    </label>
                    <label className="radio">
                        <input type="radio" value="501,800" name="filter"/>501-800
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter;