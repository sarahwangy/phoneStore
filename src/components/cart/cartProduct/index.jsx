import React from "react";

import { AiOutlineDelete } from "react-icons/ai";
import {
  ProductWrapper,
  CImage,
  CTitle,
  CPrice,
  MinusButton,
  PlusButton,
  CCount,
  CDelete,
  CTotal,
} from "./style";

export default function CartProduct() {
  return (
    <ProductWrapper>
      <CImage>
        <img src="" alt="" />
      </CImage>
      <CTitle>kk</CTitle>
      <CPrice>$000</CPrice>
      <MinusButton>-</MinusButton>
      <CCount>99</CCount>
      <PlusButton>+</PlusButton>
      <CDelete>
        <AiOutlineDelete />
      </CDelete>
      <CTotal>$000</CTotal>
    </ProductWrapper>
  );
}
