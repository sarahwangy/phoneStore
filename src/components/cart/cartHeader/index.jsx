import React from "react";
import { CartHeader, Title } from "./style";
import { Row, Col, Divider } from "antd";

// export default function CartHead() {
//   return (
//     <CartHeader>
//       <div>products</div>
//       <div>name of product</div>
//       <div> price</div>
//       <div>quantity</div>
//       <div>remove</div>
//       <div>item total</div>
//     </CartHeader>
//   );
// }

const style = { background: "#fff", padding: "8px " };

export default function CartHead() {
  return (
    <>
      <Title>Your Cart</Title>
      <CartHeader>
        <Row justify="start" gutter={16}>
          <Col className="gutter-row" span={4}>
            <div style={style}>products</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={style}>name of product</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={style}>price</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={style}>quantity</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={style}>remove</div>
          </Col>
          <Col className="gutter-row" span={4}>
            <div style={style}>item total</div>
          </Col>
        </Row>
      </CartHeader>
    </>
  );
}
