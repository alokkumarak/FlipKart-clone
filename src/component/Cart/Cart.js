import React, { Component } from 'react';
import { ProductConsumer } from '../../Context';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import EmptyCart from './EmptyCart';
import CartTotals from './CartTotals';



export default class Cart extends Component {
    render() {
        return (
           <section>
               <ProductConsumer>
                     {value=>{
                         const {cart} =value;
                         if(cart.length>0){
                             return(
                                  <React.Fragment>
                                      <Title name="Your" title="Cart"/>
                                     <CartColumns/>
                                     <CartList value={value}/>
                                     <CartTotals value={value} />
                                  </React.Fragment>
                             )
                         }
                         else{
                             return (
                                <EmptyCart/>
                             )
                         }
                     }}

               </ProductConsumer>
               
              
           </section>
        )
    }
}
