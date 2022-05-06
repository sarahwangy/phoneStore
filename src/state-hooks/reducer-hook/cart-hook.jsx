import { OPEN_MODAL, CLOSE_MODAL } from "../../constants/index";
import { useReducer, useContext, createContext } from "react";
// 动态的数据，state，不能直接引用 data 固定的值，要获取 context里面最新的productstate的值
import { storeProducts } from "../../data";
import { useProductState } from "./productList-hook";
import { getCartActions } from "../actions/cartAction";
import {
  ADD_ITEM_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  ADD_TOTALS,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
} from "../../constants";

// reducer

const initialState = {
  cart: [],
  subtotal: 0,
  total: 0,
  tax: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      // console.log("action data modal", action.data);
      return { ...state, cart: action.data };
    case INCREMENT_ITEM:
      return { ...state, cart: action.data };
    case DECREMENT_ITEM:
      return { ...state, cart: action.data };
    case ADD_TOTALS:
      const { subtotal, tax, total } = action.data;
      return { ...state, subtotal, tax, total };
    case REMOVE_ITEM_FROM_CART:
      return { ...state, cart: action.data };
    case CLEAR_CART:
      return { initialState };
    default:
      return state;
  }
};

// use context
export const CartContext = createContext(initialState);

export const useCartState = () => {
  return useContext(CartContext);
};

//  use reducer
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(CartReducer, initialState);

  const { productState } = useProductState();
  // Actions是lDataAction 返回的函数。。。
  const CartActions = getCartActions({ productState, cartState }, dispatch);
  return (
    <CartContext.Provider value={{ CartState: cartState, CartActions }}>
      {children}
    </CartContext.Provider>
  );
};
