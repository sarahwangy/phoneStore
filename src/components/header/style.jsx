import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 3px solid lightgray;
  padding: 10px;
  padding-bottom: 15px;

  background-color: #4183c4;
  // color: orange;
`;

export const LeftWrapper = styled.div`
  flex: 1;
`;

export const LeftPart = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  //   justify-content: space-between;
  //   border: 1px solid red;
  margin-left: 80px;
`;

export const Title = styled.div`
  font-size: 25px;
`;

export const Icon = styled.div`
  margin-left: 45px;
  font-size: 25px;
  margin-top: 10px;
  color: orange;
`;

export const RightPart = styled.div`
  flex: 1;
  //   border: 1px solid red;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-end;
  margin-right: 40px;
  font-size: 20px;
`;

export const Button = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px;
  background-color: orange;
`;
