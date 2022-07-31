/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'

export default class  extends Component {
    state = {
        fSize : 30
    }

  render() {
    return (
      <div className='container'>
        <h3>Bai tap tang giam font size</h3>
        <p style={{fontSize: this.state.fSize + 'px'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, rerum illo quis maxime commodi assumenda nemo ab, odio est beatae omnis. Nisi rem dolorum voluptas facere accusantium dignissimos sapiente provident.</p>
        <button className='btn btn-primary mx-2' onClick={() => this.setState({
            fSize: this.state.fSize + 5
        })}>+</button>
        <button className='btn btn-primary mx-2' onClick={() => this.setState({
            fSize: this.state.fSize - 5
        })}>-</button>
      </div>
    )
  }
}
