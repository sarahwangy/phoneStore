import { GET_DETAIL, REMOVE_DETAIL } from "../../constants/index";
import { useReducer, useContext, createContext } from "react";
import { storeProducts } from "../../data";
import { getDetailDataAction } from "../actions/productDetailAction";

// reducer

const initialState = {
  product: {},
};

const proDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return { ...state, product: action.data };
    case REMOVE_DETAIL:
      return { product: {} };
    default:
      return state;
  }
};

// use context
export const ProductDetailContext = createContext(initialState);

export const useProductDetailState = () => {
  return useContext(ProductDetailContext);
};

//  use reducer
export const ProductDetailProvider = ({ children }) => {
  const [state, dispatch] = useReducer(proDetailReducer, initialState);

  // productDetailActions是getDetailDataAction 返回的函数。。。
  const productDetailActions = getDetailDataAction(dispatch);
  return (
    <ProductDetailContext.Provider
      value={{ productDetailState: state, productDetailActions }}
    >
      {children}
    </ProductDetailContext.Provider>
  );
};
