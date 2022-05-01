// import React from "react";
// import { Empty } from "./style";

// export default function CartEmpty() {
//   return <Empty>Your Cart Is Currently Empty</Empty>;
// }

// import { Result, Button } from 'antd';

// export default () => (
//   <Result
//     title="Your operation has been executed"

//   />
// );

import { Row, Col, Divider } from "antd";

const style = { background: "#0092ff", padding: "8px " };

export default () => (
  <>
    <Row justify="start" gutter={16}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>

    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </>
);
