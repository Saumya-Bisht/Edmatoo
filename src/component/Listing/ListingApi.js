import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';
import SuggestionBlock from './SuggestionLogic';
import CostFilter from '../filters/costfilter';
import CuisineFilter from '../filters/cuisinefilter';
import SortFilter from '../filters/sortFilter';

const url = "https://developersprestapis.herokuapp.com/restaurants?mealtype="
const mealurl = "https://developersprestapis.herokuapp.com/mealtype"

var limit = 3
class ListingApi extends Component{
    constructor(props){
        super()

        this.state={
            hotellist:'',
            mealname:'',
            activePage: 1,
            totalNoOfItems: 1,
        }
    }

    setDataAsPerFilter(sortedData){
        console.log("in setDataAsPerFilter",sortedData)
        this.setState({hotellist:sortedData})
    }

    render(){
        console.log("Listing API",this.state.hotellist)
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <CostFilter costdata={(data) => {this.setDataAsPerFilter(data)}}/>
                        <CuisineFilter cuisinedata={(data) => {this.setDataAsPerFilter(data)}}/>
                        <SortFilter sortdata={(data) => {this.setDataAsPerFilter(data)}}/>
                    </div>
                    <div className="col-md-10">
                        <SuggestionBlock/>
                        <center>
                            <h3>Here Are Option of {this.state.mealname}</h3>
                        </center>
                        <ListingDisplay listdata={this.state.hotellist} activePage={this.state.activePage} limit={limit} totalNoOfItems={this.state.totalNoOfItems}
                        pageNumber={(data) => {this.setState({activePage:data})}}
                        />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
       var mealid = this.props.match.params.id
       sessionStorage.setItem('mealid',mealid)
       axios.get(`${mealurl}`)
       .then((response) => {
           for(var i=0;i<response.data.length;i++){
            if(response.data[i]._id == Number(mealid)){
                this.setState({mealname:(response.data[i].name).toUpperCase()})
                i = response.data.length;
            }else{
                this.setState({mealname:'Wrong Input'})
            }
           }
          
       })
       fetch(`${url}${mealid}`)
       .then((res) => res.json())
       .then((data) =>  {this.setState({
            hotellist: data.slice(0, data.length - 1),
            totalNoOfItems:data.length - 1
        })})
    }
}

export default ListingApi;