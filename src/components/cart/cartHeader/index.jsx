import React from "react";
import { CartHeader } from "./style";

export default function CartHead() {
  return (
    <CartHeader>
      <div>products</div>
      <div>name of product</div>
      <div> price</div>
      <div>quantity</div>
      <div>remove</div>
      <div>item total</div>
    </CartHeader>
  );
}
