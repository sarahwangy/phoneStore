import styled from "styled-components";
import breakpoint from "../../breakpoints";

export const CartWrapper = styled.div`
  // margin-top:250px;
  margin: 150px 100px;

  @media ${breakpoint.device.xs} {
    margin: 150px 10px;
  }
`;
