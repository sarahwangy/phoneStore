import React, { Component, useEffect } from "react";
import ProductComponent from "../../components/productComponent";
import { useProductState } from "../../state-hooks/reducer-hook/productList-hook";
import "./style";
import { ProListWrapper } from "./style";

export default function ProductsList() {
  const { productState } = useProductState();
  const { products } = productState;
  const { productActions } = useProductState();
  const { getListDataReturn } = productActions;

  useEffect(() => {
    getListDataReturn();
  }, []);

  if (products.length <= 0) {
    return;
  }

  return (
    <ProListWrapper>
      <ProductComponent products={products} />
    </ProListWrapper>
  );
}
