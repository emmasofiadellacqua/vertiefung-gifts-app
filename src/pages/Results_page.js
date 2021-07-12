import { render } from '@testing-library/react';
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
import Data from "../data/items.json";
import './Results_page.css';


  class Results_page extends Component  {

    constructor(props) {
      super(props)
    }
      
  render () {
    
    const {state} = this.props.location

    const interest = state.interest
    const occasion = state.occasion
    
    return(
    <div className = "Wrapper_results">
    <div className = "Results">
      { 
      Data
      .filter(item => (interest[item.interest1] || interest[item.interest2]) && occasion[item.occasion])
      .map(item => {
        return(
        <div key={ item.id } className = "Item"><button className="Item_button">
        <Link to={{
        pathname: "/Item_view",
        item: item
        }}><img src={ item.image } alt="item_image"/>
        </Link></button>
        </div>
        )
      })}
    </div>
    </div>
    );
}}

export default Results_page;
