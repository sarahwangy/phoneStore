// import React from "react";
import { Empty } from "./style";

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
  <Empty>
    Your Cart Is Empty!
    {/* <Row justify="start" gutter={16}>
      <Col className="gutter-row" span={4}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={4}>
        <div style={style}>col-6</div>
      </Col>
    </Row> */}
  </Empty>
);
