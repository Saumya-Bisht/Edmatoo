import React,{Component} from 'react';
import axios from 'axios';
import SuggestionDisplay from './SuggestDisplay';

var url = "https://developersprestapis.herokuapp.com/restaurantlist"

class SuggestionBlock extends Component{
    constructor(){
        super()

        this.state={
            suggestions:''
        }
    }

    render(){
        return(
            <div>
                <SuggestionDisplay sudata={this.state.suggestions}/>
            </div>
        )
    }

    componentDidMount(){
        let date = new Date().getDate();
       
        let mealid = sessionStorage.getItem('mealid')
        let outurl;
        if(date>0 && date <11){
            outurl=`${url}/${mealid}?hcost=1000&lcost=500`
        }else if(date>10 && date <21){
            outurl=`${url}/${mealid}?hcost=800&lcost=300`
        }else if(date>20 && date <32){
            outurl=`${url}/${mealid}?hcost=300&lcost=100`
        }
        axios.get(outurl)
        .then((response) => {this.setState({suggestions:response.data})})
    }
}


export default SuggestionBlock;