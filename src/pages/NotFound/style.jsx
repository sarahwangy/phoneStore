import styled from "styled-components";

export const Container = styled.div`
  // flex 是个好东西。。。
  display: flex;
  aligin-items: center;
  justify-content: center;
  margin: 150px;
  font-family: "montserrat", sans-serif;
  min-height: 80vh;
  background-image: linear-gradient(125deg, #6a89cc, #b8e994);
`;
export const ContainerWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  color: #343434;
`;

export const BackOption = styled.a`
  text-decoration: none;
  background: #e55039aa;
  color: #ffffff;
  padding: 12px 24px;
  display: inline-block;
  border-radius: 25px;
  font-size: 14px;

  //  变大写字母
  text-transform: uppercase;
  transition: 0.4s;
  margin-top: 10px;

  &:hover {
    background: #e55039;
    transform: scale(1.3);
  }
`;

export const Error = styled.h1`
  font-size: 160px;
  margin: 0;
  font-weight: 900;
  letter-spacing: 20px;
  background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
