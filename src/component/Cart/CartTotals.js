import React from 'react'
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const { cartSubtotal,cartTax,cartTotal,clearCart}=value;
    return (
       <React.Fragment>
           <div className="container">
               <div className="row">
                   <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitaize text-right">
                       
                       <Link to="/">
                           <button className="btn btn-outline-danger 
                           text-uppercase mb-3 px-5" type="button"
                           onClick={()=>clearCart()}
                           >
                               Clear Cart
                           </button>
                       </Link>
                       <h6>
                           <span className="text-title">
                               SubTotal :</span>
                           <strong>$ {cartSubtotal}</strong>
                       </h6>
                       <h6>
                           <span className="text-title">
                               Tax :</span>
                           <strong>$ {cartTax}</strong>
                       </h6>
                       <h6>
                           <span className="text-title">
                               Total :</span>
                           <strong>$ {cartTotal}</strong>
                       </h6>
                   </div>
               </div>
           </div>
       </React.Fragment>
    )
}
