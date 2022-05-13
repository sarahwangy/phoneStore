import { Routes, Route, useParams } from "react-router-dom";
import React, { useEffect, useReducer, useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import {
  Image,
  DetailCart,
  DetailPrice,
  DetailCategory,
  DetailTitle,
  DetailDesc,
  ButtonOption,
  Title,
  BackButton,
} from "./style";

import { useProductDetailState } from "../../state-hooks/reducer-hook/productDetail-hook";
import { useModalState } from "../../state-hooks/reducer-hook/modal-hook";
import { useCartState } from "../../state-hooks/reducer-hook/cart-hook";

export default function ProductDetail() {
  const { ModalActions } = useModalState();
  const { openModal } = ModalActions;
  const { CartActions, CartState } = useCartState();
  const { addItemToCart } = CartActions;
  let params = useParams();

  // use context
  const { productDetailState, productDetailActions } = useProductDetailState();
  const { product } = productDetailState;

  useEffect(() => {
    if (params.id && params.id !== "") {
      // 函数里面有 ID 参数，所以 可以直接用productDetailAction （ID）接收参数
      // 因为productDetailActions是getDetailDataAction 返回的函数。。。
      productDetailActions(params.id);
    }
    // return () => {
    //     dispatch(removeDetail());
    // }
  }, [params.id]);

  if (Object.keys(product).length <= 0) {
    return null;
  }

  return (
    <>
      {/* 可以放这里，但是会被上面遮住，所以要给个padding top， margin top之类的 */}
      <Title>{product.title}</Title>
      <div
        className="ui grid container"
        style={{
          marginTop: "60px",
        }}
      >
        <div className="ui placeholder segment container">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <div className="ui form">
                <div className="ui">
                  {/* 图片出不来，可以价格路径，public 里面的图片，要不然不识别 */}
                  <Image src={product.img} alt={product.title} />
                </div>
              </div>
            </div>
            <div className=" aligned column">
              <DetailTitle> Model: {product.title}</DetailTitle>
              <DetailPrice> $ {product.price} </DetailPrice>
              <DetailCategory>Made By: {product.company}</DetailCategory>
              <DetailDesc>{product.info}</DetailDesc>
              <ButtonOption>
                <DetailCart
                  disabled={product.inCart}
                  onClick={() => {
                    openModal(product.id);
                    addItemToCart(product.id);
                  }}
                >
                  {product.inCart ? (
                    <p>In Cart</p>
                  ) : (
                    <>
                      <div className="hidden content">
                        <BsFillCartCheckFill size={25} />
                      </div>

                      <div className="visible">Add To Cart</div>
                    </>
                  )}
                </DetailCart>

                <Link to={`/`}>
                  <BackButton>Back to Product</BackButton>
                </Link>
              </ButtonOption>
            </div>
          </div>
          <div className="ui vertical divider">AND</div>
        </div>
      </div>
    </>
  );
}
