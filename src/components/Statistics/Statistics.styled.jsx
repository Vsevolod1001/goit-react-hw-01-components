import styled from "@emotion/styled";

export const StatsTitle = styled.h2`
    padding: 20px;
    text-transform: uppercase;
    text-align: center;
`;
export const StatsSpan = styled.span`
    display: block;
`;

export const StatsSections = styled.section`
  box-sizing: border-box;
  width: 300px;
  margin-top: 20px;
  border: 1px solid red;
  border-radius: 10px;
  height: 160px;
`;
export const StatLi = styled.li`
  list-style: none;
  width: calc(100% / 5);
  padding-top: 10px;
  text-align: center;
  list-style: none;
  box-sizing: border-box;
  height: 100%;
  &:not(:last-child){
      border-right: 1px solid red;
  }
`;
export const StatUl = styled.ul`
    display: flex;
    justify-content: space-around;
    padding: 0;  
    background-color: #577457;
    border-radius: 10px;
    height: 56px;
    
`;