/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {

    let {product,xemChiTiet,ghiChu} = this.props;
    return (
        <div className="card">
        <img src={product.hinhAnh} alt="..." height={400}/>
        <div className="card-body">
            <h3>{product.tenSP}</h3>
            <p>{product.giaBan}</p>
            <button className="btn btn-success" onClick={()=> {
                xemChiTiet(product);
            }}>Xem chi tiet</button>
            {ghiChu}
        </div>
    </div>
    )
  }
}
