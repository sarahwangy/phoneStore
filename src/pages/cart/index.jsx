import React from "react";
import {
  CartBottom,
  CartList,
  CartHead,
  CartProduct,
  CartEmpty,
} from "../../components/cart/index";
// import CartList from "../../components/cart/cartList";
// import CartHead from "../../components/cart/cartHeader";
// import CartBottom from "../../components/cart/cartBottom";
import { CartWrapper } from "./style";

export default function Cart() {
  return (
    <>
      <CartWrapper>
        <CartHead />
        <CartList />
        <CartBottom />
        <CartEmpty />
      </CartWrapper>
    </>
  );
}
