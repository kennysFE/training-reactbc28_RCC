/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        srcImg: './products/black-car.jpg',
    }
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <img src={this.state.srcImg} className='w-100' />
            </div>
            <div className='col-6'>
                <button className='btn text-white' style={{background:'red'}} onClick={() => this.setState({
                    srcImg: './products/red-car.jpg'
                })}>Red</button>
                <button className='btn text-white' style={{background:'black'}}  onClick={() => this.setState({
                    srcImg: './products/black-car.jpg'
                })}>Black</button>
                <button className='btn text-white' style={{background:'silver'}}  onClick={() => this.setState({
                    srcImg: './products/silver-car.jpg'
                })}>Silver</button>
                <button className='btn text-white' style={{background:'#EEE'}}  onClick={() => this.setState({
                    srcImg: './products/steel-car.jpg'
                })}>Steel</button>
            </div>
        </div>
      </div>
    )
  }
}
