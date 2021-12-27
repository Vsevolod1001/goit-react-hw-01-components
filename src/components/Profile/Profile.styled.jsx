import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: #a0b4a0;
    display: block;
    border-radius: 10px;
    height: 395px;
    width: 300px;
`;

export const Status = styled.ul`
    display: flex;
    justify-content: space-around;
    padding: 0;  
    background-color: #577457;
    border-radius: 10px;
    height: 56px;
`;
export const Image = styled.img`
    height: 150px;
    width: 150px;
    margin: 20px auto;
    border-radius: 50%;
`;
export const Card = styled.div`
  text-align: center;
`;
export const CardName = styled.p`
    font-size: 25px;
`;
export const CardSpan = styled.span`
    display: block;
`;
export const CardLi = styled.li`
  width: calc(100% / 3);
  padding-top: 10px;
  text-align: center;
  list-style: none;
  box-sizing: border-box;
  height: 100%;
  &:not(:last-child){
      border-right: 1px solid red;
  }
`;