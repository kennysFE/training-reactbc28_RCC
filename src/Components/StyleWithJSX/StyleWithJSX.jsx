/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable no-undef */
import React, { Component } from 'react'
import style from './StyleWithJSX.module.css';

export default class StyleWithJSX extends Component {
  render() {
    return (
      <div className='Container'>
        <h3>Hello </h3>
        <p className='text-red'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium ullam, quae quasi sequi, natus nemo assumenda officia ad velit cum error nulla non impedit a quod explicabo quos animi.
        </p>
        <h3 className={`p-2 bg-dark text-light ${style['text-blue']}`}>Hello may bro</h3>

        <div style={{color: 'red', background:`url(https://picsum.photos/500/500)`, height :500}}></div>
                
        </div>
    )
  }
}
