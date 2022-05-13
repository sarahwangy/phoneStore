import styled from "styled-components";
import breakpoint from "../../../breakpoints";

export const ProductWrapper = styled.div`
  display: flex;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;

  // @media ${breakpoint.device.xs} {
  //   font-size: 10px;
  // }
`;

export const Product = styled.div`
  text-align: center;
`;
export const Count = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

export const MinusButton = styled.div`
  border: 1px solid black;
  padding: 0 8px;
`;
export const PlusButton = styled.div`
  border: 1px solid black;
  padding: 0 8px;
`;
export const CCount = styled.div`
  border: 1px solid black;
  padding: 0 3px;
`;

export const ImageWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  img {
    width: 80px;
    height: 70px;
  }
`;
