/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import ItemProduct from './ItemProduct';

export default class ProductList extends Component {


    renderProductItem = () => {
        let {products,viewDetail} = this.props;
        return products.map((prod, index) => {
            return (<div className='col-3' key={index}>
                <ItemProduct product={prod} viewDetail = {viewDetail} />
            </div>
        )
        })
    }
  render() {

    return (
      <div>
        <h3>Product list</h3>
        <div className="row">
            {this.renderProductItem()}
        </div>
      </div>
    )
  }
}
