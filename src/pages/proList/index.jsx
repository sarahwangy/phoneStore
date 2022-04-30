import React, { Component, useEffect } from "react";
import ProductComponent from "../../components/productComponent";
import { useProductState } from "../../state-hooks/reducer-hook/productList-hook";

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
    <div
      style={{
        backgroundColor: "rgba(211, 211, 211, 0.927)",
        margin: "0 auto",
      }}
    >
      <ProductComponent products={products} />
    </div>
  );
}
