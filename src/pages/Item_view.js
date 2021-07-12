import React from "react";
import "./Item_view.css";
import {Link} from 'react-router-dom';

function Item_view(props) {

  const item = props.location.item;

  return(
    <section className="item_section">
    <div className="img_wrapper">
     <img className="item_picture" src={ item.full_image } alt="product_img"></img>
    </div>
    <div>
      <p className="item_price">${ item.price }</p>
    </div>
    <div className="item_text">
      <h3>{ item.title }</h3>
      <p>{ item.description }</p>
    </div>
    <div className="item_button">
      <button className="add_to_cart"><Link to="/Checkout_page" className="Link">Add to cart</Link></button>
    </div>
    <div className="back_to_home">
    <button className="back_to_home_button">
    <Link to="/Home_page"  className="Link">Back to the home page</Link></button>
    </div>
    </section>
  );

}

export default Item_view;