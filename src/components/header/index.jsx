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

export default function Header() {
  return (
    <HeaderWrapper>
      {/* <div className="ui fixed menu">
        <div className="ui container center"> */}
      <LeftWrapper>
        <LeftPart>
          <Title> Products</Title>
          <Icon>
            <BsFillTelephoneForwardFill />
          </Icon>
        </LeftPart>
      </LeftWrapper>

      <RightPart>
        <Button>
          <BsFillCartCheckFill /> My Cart
        </Button>
      </RightPart>
      {/* </div>
      </div> */}
    </HeaderWrapper>
  );
}
