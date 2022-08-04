/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Modal from './Modal'
import ProductList from './ProductList'

const data =  [
    { id: 1, name: 'black car', img: './products/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './products/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './products/silver-car.jpg', price: 3000 },
    { id: 3, name: 'Steel car', img: './products/steel-car.jpg', price: 4000 }
    ];
export default class ExerciseCarStore extends Component {

    viewDetail = (producthello) => {
        this.setState({
            productMadal: producthello
        })
        
    }

    state = {
        productMadal: { id: 3, name: 'silver car', img: './products/silver-car.jpg', price: 3000 },
    }

  render() {
    return (
      <div>
        < Modal productMadal={this.state.productMadal} />
        < ProductList viewDetail = {this.viewDetail} 
            products={data} />
      </div>
    )
  }
}
