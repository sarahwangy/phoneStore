import React from "react";

import { AiOutlineDelete } from "react-icons/ai";
import {
  ProductWrapper,
  CImage,
  CTitle,
  CPrice,
  Product,
  MinusButton,
  PlusButton,
  CCount,
  Count,
  ImageWrapper,
  CDelete,
  CTotal,
} from "./style";

import { Row, Col, Divider } from "antd";
import { useCartState } from "../../../state-hooks/reducer-hook/cart-hook";

const style = { background: "#fff", padding: "8px ", fontSize: "18px" };

export default function CartProduct({ cartObj }) {
  const { CartActions } = useCartState();
  const { inc, dec, removeItemFromCart } = CartActions;
  const { id, title, img, price, total, count } = cartObj;
  return (
    <Product>
      <Row justify="start" gutter={16}>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <ImageWrapper>
              <img src={img} alt={title} />
            </ImageWrapper>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>{title}</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>${price}</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Count>
              <MinusButton onClick={() => dec(id)}>-</MinusButton>
              <CCount>{count}</CCount>
              <PlusButton onClick={() => inc(id)}>+</PlusButton>
            </Count>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div onClick={() => removeItemFromCart(id)} style={style}>
            <AiOutlineDelete />
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>${total}</div>
        </Col>
      </Row>
    </Product>
  );
}

// export default function CartProduct() {
//   return (
//     <ProductWrapper>
//       <CImage>
//         <img src="" alt="" />
//       </CImage>
//       <CTitle>kk</CTitle>
//       <CPrice>$000</CPrice>
//       <MinusButton>-</MinusButton>
//       <CCount>99</CCount>
//       <PlusButton>+</PlusButton>
//       <CDelete>
//         <AiOutlineDelete />
//       </CDelete>
//       <CTotal>$000</CTotal>
//     </ProductWrapper>
//   );
// }
