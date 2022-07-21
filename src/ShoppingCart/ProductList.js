import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  arrProducts = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      donGia: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      donGia: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      donGia: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  
  renderProduct = () => {
    return this.arrProducts.map((product, index)=> {
        return(
            <div className="col-4 mt-3" key={index}>
                <ProductItem productProps = {product}/>
            </div>
        );
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center text-success">Danh sách sản phẩm</h3>
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}
