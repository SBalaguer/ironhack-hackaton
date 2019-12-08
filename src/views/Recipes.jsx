import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SingleRecipie from './../Components/SingleRecipie'
import SingleProduct from './../Components/SingleProduct'

export class Home extends Component {


  render() {
    return (
      <div style = {{width: "100vw",
      display: "flex",
      flexWrap: 'wrap',
      display: "-webkit-flex",
      justifyContent: "center"
      }}>
        <h3>Products</h3>
        <SingleProduct img="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2019/01/28/benefc3adcios-do-kiwi.jpg"/>
        <SingleProduct img="https://geant.vteximg.com.br/arquivos/ids/226349-1000-1000/414102.jpg?v=636802221255170000"/>
        <SingleProduct img="https://arvoredeluz.com/wp-content/uploads/2018/07/valencia-oranges-california-arvore-de-luz.jpg"/>
        <SingleProduct img="https://phlabs.com/Content/Images/uploaded/Strawberry.jpg"/>
        <SingleProduct img="https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2123,x_0,y_109/f_auto,q_auto,w_1100/v1554744386/shape/mentalfloss/556777-istock-187420397.jpg"/>
        <SingleProduct img="https://cdn3.volusion.com/kceqm.mleru/v/vspfiles/photos/1477-2T.jpg?v-cache=1570614825"/>
        <SingleProduct img="https://i0.wp.com/ozfruitdirect.com.au/wp-content/uploads/2019/03/Grapes-Red.jpg?fit=800%2C600&ssl=1"/>
        <SingleProduct img="https://www.tastymediterraneo.com/wp-content/uploads/2017/09/Tasty-Mediterraneo-figs.jpg"/>
        <SingleProduct img="https://images-na.ssl-images-amazon.com/images/I/91I0AlWC%2B0L._SL1500_.jpg"/>
        <SingleProduct img="https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-nactarine-558x600.jpg"/>
        <h3>Recipies</h3>
        <SingleRecipie img="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2019/01/28/benefc3adcios-do-kiwi.jpg"/>
        <SingleRecipie img="https://geant.vteximg.com.br/arquivos/ids/226349-1000-1000/414102.jpg?v=636802221255170000"/>
        <SingleRecipie img="https://arvoredeluz.com/wp-content/uploads/2018/07/valencia-oranges-california-arvore-de-luz.jpg"/>
        <SingleRecipie img="https://phlabs.com/Content/Images/uploaded/Strawberry.jpg"/>
        <SingleRecipie img="https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2123,x_0,y_109/f_auto,q_auto,w_1100/v1554744386/shape/mentalfloss/556777-istock-187420397.jpg"/>
        <SingleRecipie img="https://cdn3.volusion.com/kceqm.mleru/v/vspfiles/photos/1477-2T.jpg?v-cache=1570614825"/>
        <SingleRecipie img="https://i0.wp.com/ozfruitdirect.com.au/wp-content/uploads/2019/03/Grapes-Red.jpg?fit=800%2C600&ssl=1"/>
        <SingleRecipie img="https://www.tastymediterraneo.com/wp-content/uploads/2017/09/Tasty-Mediterraneo-figs.jpg"/>
        <SingleRecipie img="https://images-na.ssl-images-amazon.com/images/I/91I0AlWC%2B0L._SL1500_.jpg"/>
        <SingleRecipie img="https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-nactarine-558x600.jpg"/>
      </div>
    )
  }
}

export default Home
