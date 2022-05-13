import styled from "styled-components";
import breakpoint from "../../breakpoints";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  position: fixed;
  cursor: pointer;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 3px solid lightgray;
  padding: 10px;
  padding-bottom: 15px;

  background-color: #4183c4;
  // flex-direction: row;
  color: orange;

  @media ${breakpoint.device.xs} {
    flex-direction: column;
  }
  @media ${breakpoint.device.lg} {
    flex-direction: row;
  }
`;

export const LeftWrapper = styled.div`
  flex: 1;
`;

export const LeftPart = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  margin-left: 80px;
`;

export const Title = styled.div`
  font-size: 25px;
  color: white;

  &:hover {
    color: white;
    transform: scale(1.2);
  }
`;

export const Icon = styled.div`
  margin-left: 45px;
  font-size: 25px;
  margin-top: 10px;
  color: orange;

  &:hover {
    color: white;
    transform: scale(1.2);
  }
`;

export const RightPart = styled.div`
  flex: 1;
  //   border: 1px solid red;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-end;

  // flex 之后，还可以结合margin或者其他的 一起调整。。
  margin-right: 40px;
  font-size: 20px;
`;

export const Button = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  background-color: orange;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #009ffd;
    transform: scale(1.05);
  }
`;
