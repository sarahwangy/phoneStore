import { useReducer, useContext, createContext } from "react";
import { GET_LIST_DATA } from "../../constants/index";
import { storeProducts } from "../../data";
import { getListData } from "../actions/productAction";

//  use reducer
const initialState = { products: [] };

const productReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_LIST_DATA:
      console.log("GET_LIST_DATA", action);
      return { ...state, products: action.data };

    default:
      return state;
  }
};

// use context
export const ProductContext = createContext(initialState);

export const useProductState = () => {
  return useContext(ProductContext);
};

//  use reducer
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const productActions = getListData(dispatch);
  return (
    <ProductContext.Provider value={{ productState: state, productActions }}>
      {children}
    </ProductContext.Provider>
  );
};
