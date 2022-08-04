/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import ProductItem from './ProductItem'

const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
  ]

export default class DemoXemChiTiet extends Component {
    // Khai bao gia tri mac dinh cho state de luu tru du lieu 
    state = {
        productDetail: { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    }
    renderProduect = () => {
        return data.map((product,index) => {
            return <div className="col-4" key={product.maSP}>
            < ProductItem product={product} 
            xemChiTiet = {this.xemChiTiet}
            ghiChu = {<p>Ghi chu</p>}/>
        </div>
        })
    }

    xemChiTiet = (productClick) => {
        console.log(productClick);
        //setState thay the productDetail = object san pham duoc Click 
        this.setState({ 
            productDetail: productClick
        })
    }

  render() {
    let {maSP,tenSP,giaBan,hinhAnh,manHinh,ram,cameraSau,cameraTruoc,rom,heDieuHanh} = this.state.productDetail;
    return (
        <div className="container">
            <h3>Danh sach san pham </h3>
            <div className="row">
                {this.renderProduect()}
            {/* <div className="col-4">
                <div className="card">
                    <img src="./img/applephone.jpg" alt="..." />
                    <div className="card-body">
                        <h3>phone</h3>
                        <p>1000</p>
                        <button className="btn btn-success">Xem chi tiet</button>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <img src="./img/applephone.jpg" alt="..." />
                    <div className="card-body">
                        <h3>phone</h3>
                        <p>1000</p>
                        <button className="btn btn-success">Xem chi tiet</button>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <img src="./img/applephone.jpg" alt="..." />
                    <div className="card-body">
                        <h3>phone</h3>
                        <p>1000</p>
                        <button className="btn btn-success">Xem chi tiet</button>
                    </div>
                </div>
            </div> */}
        </div>
        <div className='details-product mt-2'>
            <div className="row">
                <div className="col-3">
                    <h3 className="text-center">{tenSP}</h3>
                    <img src={hinhAnh} alt="..."  height={200}/>
                </div>
                <div className="col-9">
                    <h3>Thong tin chi tiet</h3>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>manhinh</td>
                                <td>{manHinh}</td>
                            </tr>
                            <tr>
                                <td>ram</td>
                                <td>{ram}</td>
                            </tr>
                            <tr>
                                <td>cameraSau</td>
                                <td>{cameraSau}</td>
                            </tr>
                            <tr>
                                <td>cameraTruoc</td>
                                <td>{cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>rom</td>
                                <td>{rom}</td>
                            </tr>
                            <tr>
                                <td>he dieu hanh</td>
                                <td>{heDieuHanh}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
