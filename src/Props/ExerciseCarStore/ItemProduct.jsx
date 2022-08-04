import React, { Component } from 'react'

export default class ItemProduct extends Component {
  render() {
    // return (
        let {product,viewDetail} = this.props;
    return (
      <div className='card'>
        <img src={product.img} alt='...' />
        <div className='card-body'>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#modelId" onClick={()=>{
                viewDetail(product);
            }}>Detail</button>
        </div>
      </div>
    // <div className='card'>
    //     <img src="./products/red-car.jpg" alt="..." className="w-100" />
    //     <div className="card-body">
    //         <h3>Red car</h3>
    //         <p>1000</p>
    //         <button className='btn btn-success'>Detail</button>
    //     </div>
    // </div>
    )
  }
}
