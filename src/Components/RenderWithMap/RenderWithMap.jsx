/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

const data = [
    {id:1 , name: 'Red car', price: 1000, img:"./products/red-car.jpg"},
    {id:1 , name: 'Red car', price: 1000, img:"./products/black-car.jpg"},
    {id:1 , name: 'Red car', price: 1000, img:"./products/silver-car.jpg"},
    {id:1 , name: 'Red car', price: 1000, img:"./products/steel-car.jpg"},
]


export default class RenderWithMap extends Component {

    renderProduct = () => {
        // const arrTrJSX = [];
        // for(let index = 0; index < data.length; index++) {
        //     let prod = data[index];
        //     let tr = <tr>
        //         <td>{prod.id}</td>
        //         <td>{prod.name}</td>
        //         <td>{prod.price}</td>
        //         <td><img src={prod.img} width={50} alt="..."/></td>
        //     </tr>;
        //     // Dua vao mang 
        //     arrTrJSX.push(tr);
        // }
        // return arrTrJSX;
        // Cach 2 : Su dung map 
        const arrJSX = data.map((prod, index) => {
            return <tr key={prod.id}>
            <td>{prod.id}</td>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
            <td><img src={prod.img} width={50} alt="..."/></td>
        </tr>;
        });
        return arrJSX;
    }

  render() {
    return (
      <div className='container'>
        <h3>Render table product</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>id </th>
                    <th>name </th>
                    <th>price</th>
                    <th>img</th>
                </tr>
            </thead>
            <tbody>
            {this.renderProduct()}
            </tbody>
        </table>
        </div>
    )
  }
}
