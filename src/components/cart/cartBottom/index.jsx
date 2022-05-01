import React from "react";
import { BottomWrapper, ClearButton } from "./style";

export default function CartBottom() {
  return (
    <BottomWrapper>
      <ClearButton>CLEAR CART</ClearButton>
      <div>SUBTOTAL: $555</div>
      <div>TAX: $</div>
      <div>TOTAL: $</div>
    </BottomWrapper>
  );
}
