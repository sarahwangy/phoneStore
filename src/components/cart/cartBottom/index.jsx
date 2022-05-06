import React, { useEffect } from "react";

import { BottomWrapper, ClearButton } from "./style";
import { useCartState } from "../../../state-hooks/reducer-hook/cart-hook";
import { Link } from "react-router-dom";

export default function CartBottom() {
  // 为什么有的解构时候带（ ），有的不带？
  const { CartState, CartActions } = useCartState();
  const { subtotal, tax, total, cart } = CartState;
  const { addTotals, clearCart } = CartActions;
  // Updating Total value
  useEffect(() => {
    addTotals();
  }, [subtotal]);
  return (
    <BottomWrapper>
      <Link to={`/`}>
        <ClearButton onClick={() => clearCart(cart)}>CLEAR CART</ClearButton>
      </Link>

      <div>SUBTOTAL: ${subtotal}</div>
      <div>TAX: ${tax}</div>
      <div>TOTAL: ${total}</div>
    </BottomWrapper>
  );
}
