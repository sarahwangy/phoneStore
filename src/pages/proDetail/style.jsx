import styled from "styled-components";

export const Image = styled.img``;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  min-height: 50px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 145px;

  // background-image: -webkit-linear-gradient(...) 为文本元素提供渐变背景。
  // -webkit-text-fill-color: transparent 使用透明颜色填充文本。
  // -webkit-background-clip: text 用文本剪辑背景，用渐变背景作为颜色填充文本。

  background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const DetailTitle = styled.h1`
  color: #333333;
  width: 516px;
  height: 72px;
  margin-top: 0 0 14px;
  font-style: oblique;
  padding: 15px;
  font: 28px;
`;

// 前后三角形， 组成 正方形
export const DetailPrice = styled.h2`
  position: relative;
  color: #ffffff;
  font-style: oblique;
  font: 22px;
  background: #00b5ad;
  margin: 30px 0 0 22px;
  padding: 12px 33px;
  width: 167px;
  height: 52px;

  &:hover {
    background-color: #009c95;
    border-color: #009c95;
    color: #fff;
  }
  &:before {
    position: absolute;
    -webkit-transform: translateY(-50%) translateX(50%) rotate(-45deg);
    transform: translateY(-50%) translateX(50%) rotate(-45deg);
    top: 50%;
    right: 100%;
    content: "";
    background-color: inherit;
    background-image: none;
    width: 1.56em;
    height: 1.56em;
    -webkit-transition: none;
    transition: none;
  }
  &:after {
    position: absolute;
    content: "";
    top: 50%;
    left: -0.25em;
    margin-top: -0.25em;
    background-color: #fff;
    width: 0.5em;
    height: 0.5em;
    -webkit-box-shadow: 0 -1px 1px 0 rgb(0 0 0 / 30%);
    box-shadow: 0 -1px 1px 0 rgb(0 0 0 / 30%);
    // 白点
    border-radius: 50%;
  }
`;

export const DetailCategory = styled.h3`
  color: #a5673f;
  background: #f3f4f5;
  margin: 25px 0 14px;
  padding: 11px 14px;
  font: 18px;
  width: 516px;
  height: 47px;
  border: 1px solid gray;
  border-radius: 5px;
  font-style: oblique;
`;

export const DetailDesc = styled.p`
  color: #777777;
  font-size: 19px;
  margin: 0 0 18px;
  // width: 516px;
  color: lightblack;
  font-weight: 500;
  margin: 30px auto;
`;

export const ButtonOption = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

export const BackButton = styled.div`
  background-color: #ff3e6c;

  color: #fff;
  font-size: 18px;
  margin: 0 0.25em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  font-weight: 700;

  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 1px solid #ff3e6c;
    color: #ff3e6c;
    transform: scale(1.05);
  }
`;

export const DetailCart = styled.button`
  // display: flex;
  // align-items: center;
  // text-align: center;
  // justify-content: center;

  background-color: #ff3e6c;
  border: 1px solid #ff3e6c;
  color: #fff;
  font-size: 18px;
  margin-left: 0;
  max-width: 15rem;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  // padding-right: 0 !important;
  vertical-align: middle;
  z-index: 1;
  margin: 0 0.25em 0 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  text-transform: none;
  text-shadow: none;
  font-weight: 700;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  min-height: 1em;
  cursor: pointer;
  // background: #e0e1e2 none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;

  outline: 0;
  &:hover {
    background-image: none;
    box-shadow: 0 0 0 1px transparent inset;

    > div.hidden {
      top: 50%;
      right: auto;
    }

    > div.visible {
      transform: translateY(200%);
      right: auto;
    }
  }

  > div.hidden {
    top: -50%;
    left: 0;
    right: auto;
    margin-top: -0.5em;
    position: absolute;
    width: 100%;
    will-change: transform, opacity;
    transition: top 0.3s ease, transform 0.3s ease, -webkit-transform 0.3s ease;
  }
  > div.visible {
    transition: top 0.3s ease, transform 0.3s ease, -webkit-transform 0.3s ease;
  }
`;

const DetailDivided = styled.div`
  // color:#000000D9;
  // font:14px;
  // width:30px;
  // height:403px;
  // border:1px solid red;

  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin: 0;
  padding: 0;
  width: auto;
  height: 50%;
  line-height: 0;
  text-align: center;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);

  &:before {
    top: -100%;
    position: absolute;
    left: 50%;
    content: "";
    z-index: 3;
    border-left: 1px solid rgba(34, 36, 38, 0.15);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    width: 0%;
    height: calc(100% - 1rem);
  }
  &:after {
    top: auto;
    bottom: 0;
    position: absolute;
    left: 50%;
    content: "";
    z-index: 3;
    border-left: 1px solid rgba(34, 36, 38, 0.15);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    width: 0%;
    height: calc(100% - 1rem);
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border: 1px solid red;
  margin: 100px auto;
  padding: 50px 0;
  box-size: border-box;
`;

const LeftPart = styled.div`
  width: 500px;
  height: 750px;
  border: 1px solid green;
`;

const RightPart = styled.div`
  width: 576px;
  height: 388px;
  padding: 20px 20px 20px 40px;
  border: 1px solid red;
`;
