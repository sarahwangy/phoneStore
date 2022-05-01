import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/contact";
import Modal from "./components/modal";
import Cart from "./pages/cart";

import "./App.css";

const ProductDetail = lazy(() => import("./pages/proDetail/index"));
const ProductsList = lazy(() => import("./pages/proList/index"));

function App() {
  return (
    <div>
      <Suspense fallback={<h1>Loading.....</h1>}>
        <BrowserRouter>
          <Header href="/" />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<Cart />} />

            {/* not found 404 页面，需要加*，才能匹配 404页面，否则显示不出来
            https://stackoverflow.com/questions/67050966/how-to-build-a-404-page-with-react-router-dom-v6 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Modal />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
