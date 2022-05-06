import React from "react";
import CartProduct from "../cartProduct/index";
import { useCartState } from "../../../state-hooks/reducer-hook/cart-hook";

export default function CartList() {
  const { CartState } = useCartState();
  const { cart } = CartState;
  return (
    <div>
      {cart.map((cartObj) => {
        return <CartProduct key={cartObj.id} cartObj={cartObj} />;
      })}
    </div>
  );
}
