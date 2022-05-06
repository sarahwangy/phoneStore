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
  CDelete,
  CTotal,
} from "./style";

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

import { Row, Col, Divider } from "antd";

const style = { background: "#fff", padding: "8px ", fontSize: "18px" };

export default function CartProduct() {
  return (
    <Product>
      <Row justify="start" gutter={16}>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <img src="" alt="" />
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>kk</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>$000</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Count>
              <MinusButton>-</MinusButton>
              <CCount>99</CCount>
              <PlusButton>+</PlusButton>
            </Count>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <AiOutlineDelete />
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>$000</div>
        </Col>
      </Row>
    </Product>
  );
}
