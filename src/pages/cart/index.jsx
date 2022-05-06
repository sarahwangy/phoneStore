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
import { useCartState } from "../../state-hooks/reducer-hook/cart-hook";

export default function Cart() {
  const { CartState, CartActions } = useCartState();
  const { cart } = CartState;
  //  可以这里首页直接用context 解构需要的值，然后传给相应的组件，也可以不在这里解构，组件需要什么，组件那里直接解构。
  // const { CartState } = useCartState();
  // const { cart } = CartState;

  console.log("cart", cart);
  console.log("cart-cart ", cart.length);
  return cart.length > 0 ? (
    <>
      <CartWrapper>
        <CartHead />
        <CartList />
        <CartBottom />
      </CartWrapper>
    </>
  ) : (
    <CartEmpty />
  );
}
