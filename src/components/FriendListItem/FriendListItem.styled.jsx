import styled from "@emotion/styled";

export const SpanOnLine = styled.span`
     width: 15px;
     height: 15px;
     border-radius: 50px;
     background-color: ${({ isOnline }) => (isOnline ? `green` : `red`)};         
     margin: 0 20px;
     margin-top: 18px;
     
`;
export const FriendLi = styled.li`
    width: 200px;
    height: 50px;
    display: block;
    display: flex;
    border: 1px solid tomato;
    border-radius: 10px;
    box-shadow: 10px 5px 5px red;
    :not(:last-child){
        margin-bottom: 10px;
    }
    
    
`;
export const FriendImg = styled.img`
    margin-right: 20px;
    margin-top: 5px;
    width: 40px;
    height: 40px;
`;