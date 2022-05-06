import React from "react";
import { ProductProvider, CartProvider, ModalProvider } from "./";

function ProviderComposer({ contexts, children }) {
  // [<ProductProvider />, <CartProvider />, <ModalProvider />]
  return contexts.reduceRight(
    // kids = accumulator, parent = currentValue
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),

    // parent
    //   children

    // initialValue for kids
    children
  );

  // <ModalProvider>  Children </ModalProvider >

  // <CartProvider>
  //   <ModalProvider>  Children </ModalProvider >
  // </CartProvider>

  {
    /* <ProductProvider >
  <CartProvider>
    <ModalProvider>  Children </ModalProvider >
  </CartProvider>
</ProductProvider > */
  }
}

function StateProvider({ children }) {
  return (
    <ProviderComposer
      contexts={[<ProductProvider />, <CartProvider />, <ModalProvider />]}
    >
      {children}
    </ProviderComposer>
  );
}

export { StateProvider };
