import styled from "styled-components";

export const BottomWrapper = styled.div`
  display: flex;

  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 800px;
  line-height: 50px;
  font-weight: 500;
  font-size: 20px;
  margin-top: 80px;
`;

export const ClearButton = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid #009ffd;
  border-color: #009ffd;
  color: #009ffd;
  border-radius: 0.5rem;
  padding: 0.5rem 0.6rem;
  cursor: pointer;
  &:hover {
    background: #009ffd;
    color: white;
    transition: all 500ms ease-in-out;
  }
`;
