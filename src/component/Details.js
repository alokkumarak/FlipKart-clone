import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button';
export default class Details extends Component {
    render() {
        return (
             <ProductConsumer>
                 {(value)=>{
                    const {id,company,img,info,price,title,inCart}=value.detailProduct;
               
                    return(
                        <div className="container py-5">
                             <div className="row">
                                 <div className="col-10 mx-auto text-center 
                                 text-slanted text-blue my-5">
                                     <h1>{title}</h1>
                                     <div className="row">
                                         <div className="col-10 mx-auto col-md-6 
                                         my-3 ">
                                            <img src={img} className="img-fluid" alt="product"/>
                                         </div>
                                         <div className="col-10 mx-auto col-md-6 
                                         my-3 text-capitalize">
                                             <h3>Model : {title}</h3>
                                             <h6 className="text-title text-uppercase
                                             text-muted mt-3 mb-2">
                                                 made by : <span className="text-uppercase">
                                                     {company}
                                                 </span>
                                             </h6>
                                             <h3 className="text-danger">
                                                 price : <span>$</span>{price}
                                             </h3>
                                             <p className="text-capitalize font-weight-bold
                                             mt-3 m-0">Some info about product :</p>
                                             <p className="text-muted lead">{info}</p>
                                             <Link to='/'>
                                             <ButtonContainer className="text-dark">
                                                 Back To product
                                             </ButtonContainer>
                                             </Link>
                                             <ButtonContainer 
                                                 cart 
                                               disabled={inCart ?true :false}
                                               onClick={()=>{
                                                   value.addToCart(id);
                                                   value.openModal(id);
                                               }}
                                             >
                                                 {inCart?"inCart" : "Add to Cart"}
                                             </ButtonContainer>
                                         </div>
                                     
                                         
                                     </div>
                                 </div>
                             </div>
                        </div>
                    )
         
         }}
             </ProductConsumer>
        )
    }
}
