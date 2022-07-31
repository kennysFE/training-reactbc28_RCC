/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class ProductCard extends Component {
  render() {
    // This.props: Thuoc tinh co san cua react class component dung de nhan gia tri tu component cha truyen vao
    /*
        So sanh: state and props
        giong nhau: Deu la thuoc tinh co san cua react class component dungde bidinh du lieu ra giao dien 
        khac nhau : State co the gan lai gia tri thong qua phuonf thuc setState, props khong the gan lai gia tri (readonly) dung de nhan gia tri tu component cha truyen vao.

        optionnal chainnning: ? => neu co thi lam khong co gia tri thi bo qua`  ````    ```` ```` ```` ``
            */
    const {name, age} = this.props;
    return (
      <div className='card'>
        <img src={`https://i.pravatar.cc?u=${age}" alt="..." `}/>
        <div className="card-body">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
      </div>
    
    )
  }
}
