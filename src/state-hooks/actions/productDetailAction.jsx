import { GET_DETAIL, REMOVE_DETAIL } from "../../constants/index";
import { useReducer, useContext, createContext } from "react";
import { storeProducts } from "../../data";
// 不用 json fake API，用 data js 代替，这样方便部署 deploy
// import ProductsList from "../config/productList.json";

//  actions

export const removeDetail = () => ({ type: REMOVE_DETAIL });
export const getDetail = (data) => ({ type: GET_DETAIL, data });

export const getDetailDataAction = (dispatch) => {
  return (id) => {
    // 打log 看看传的ID是几
    console.log("id", id);
    // 直接读static 固定的 product data的时候， 比如传的ID为4，但是storeproduct[4]是搜素索引为4的那个product，
    // index是从0开始的，所以会出现传ID4， 其实返回的是 storeprod 的第5个。
    // 所以这里可以借鉴 modal， cart 的find js 方法，读动态的，而不是直接读static 静态的product
    const findContent = storeProducts[id - 1];
    // 打log看看 findcont 是 发现的第几个ID的值
    console.log("findcontent", findContent);
    dispatch(getDetail(findContent));
  };
};
