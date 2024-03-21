import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import db from "../db.json"; //db.json파일을 가져오기

const ProductDetail = () => {
  let [product, setProduct] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    //url파라미터로 받은 상품 아이디에 해당하는 상품을 db.json에서 찾아서 설정
    const selectedProduct = db.products.find(
      (item) => item.id === parseInt(id)
    );
    setProduct(selectedProduct);
  }, [id]);
  return (
    <div className="ProductDetail">
      <div className="DetailInner">
        <img src={product?.img} alt="image" />
        <form className="DetailContent">
          <h2 className="Title">{product?.title}</h2>
          <p className="Price">
            ₩&nbsp;
            {product?.price?.toLocaleString(undefined, {
              minimumFractionDigits: 0,
            })}
          </p>
          <select>
            <option value="-1">사이즈 선택</option>
            {product?.size.map((item) => (
              <option>{item}</option>
            ))}
          </select>
          <br />
          <button>장바구니 추가</button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
