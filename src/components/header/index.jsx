import React from "react";
import {
  BsFillTelephoneForwardFill,
  BsFillCartCheckFill,
} from "react-icons/bs";
import {
  LeftPart,
  RightPart,
  HeaderWrapper,
  Icon,
  LeftWrapper,
  Title,
  Button,
} from "./style";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrapper>
      {/* <div className="ui fixed menu">
        <div className="ui container center"> */}
      <LeftWrapper>
        <LeftPart>
          <Link to={`/`}>
            <Title> Products</Title>
          </Link>
          <Link to={`/contact`}>
            <Icon>
              <BsFillTelephoneForwardFill />
            </Icon>
          </Link>
        </LeftPart>
      </LeftWrapper>

      <RightPart>
        <Link to={`/cart`}>
          <Button>
            <BsFillCartCheckFill /> My Cart
          </Button>
        </Link>
      </RightPart>
      {/* </div>
      </div> */}
    </HeaderWrapper>
  );
}
