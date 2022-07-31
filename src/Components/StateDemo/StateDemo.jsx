/* eslint-disable no-unused-vars */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { wait } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'
import BaiTapChonXe from '../BaiTapChonXe/BaiTapChonXe'
import BaiTapTangGiamFontSize from '../BaiTapTangGiamFontSize/BaiTapTangGiamFontSize'

export default class StateDemo extends Component {
    // State : la thuoc thinh co san duoc ke thua tu react class component, dung de chua cac gia tri thay doi tren giao dien 

    state = {
        login : false
    }


    // login = false;
    renderlogin = () => {
        if (this.state.login) {
        return <div>
            <span className='text-light'>Hello cybersoft</span>; 
        </div>
        }
        return <button className="btn btn-outline-success" onClick={() => {
            this.handleClick();
        }}>Login</button>;
    }

    handleClick =  () => {
        // this.state.login = true;
        // console.log(this.state.login)
        // this.render();
        // let newState = {login:true};
        // this.setState la phuong thuc co san cua react class component, lam thay doi gia tri state cu dong thoi render lai giao dien
        this.setState({login:true}, () => {
            console.log(this.state)
        });
    }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="visually-hidden">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <a className="dropdown-item" href="#">Action 1</a>
          <a className="dropdown-item" href="#">Action 2</a>
        </div>
      </li>
    </ul>
    <div className="d-flex my-2 my-lg-0 align-items-center">
      {/* {this.login ? <span className='text-light'>Hello cybersoft</span> : <button className="btn btn-outline-success ">Login</button>} */}
      {this.renderlogin()}
    </div>
    <div>
      <BaiTapChonXe />
      <BaiTapTangGiamFontSize />
    </div>
  </div>
</nav>
    )
  }
  
}
