import React, { Component } from 'react'

export default class HandleEvent extends Component {
  render() {
    return (
      <div className='container'>
        <button id='btnClick' onClick = {(e) => {
            alert('hello');
        }}>Nice</button>

        <button className='btn btn-primary ml-2' onClick = {this.handleClick}>OK</button>
        <hr />
        <h3>Handle Click Param</h3>
        <button onClick={(e) => {
            this.showMess('nice try');
        }}>showMess</button>

        <button className='btn btn-primary ml-2' onClick = {this.handleClick}>OK</button>
      </div>
    )
  }
}
